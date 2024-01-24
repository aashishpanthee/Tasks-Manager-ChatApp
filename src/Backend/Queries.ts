import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";
import {
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { toastError } from "../utils/toast";
import { db } from "./Firebase";
import catchErr from "../utils/catchErr";
import { authDataType, setLoadingType, userType } from "../Types";
import { NavigateFunction } from "react-router-dom";
import { defaultUser, setUser } from "../redux/userSlice";
import { AppDispatch } from "../redux/store";
import { convertTime } from "../utils/convertTime";
import { avatargenerator } from "../utils/avatargenerator";

// collection name
enum Collections {
  USERSCOLL = "users",
  TASKSCOLL = "tasks",
  TASKLISTCOLL = "tasklist",
  CHATSCOLL = "chats",
  MESSAGESCOLL = "messages",
}

// sign up a user
export const BE_signUp = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  routeTo: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, password, confirmPassword } = data;
  setLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          const avatar = avatargenerator(user.email?.split("@")[0] || "");
          const userInfo = await addUserToCollection(
            user.uid,
            user.email || "",
            user.email?.split("@")[0] || "",
            avatar
          );
          dispatch(setUser(userInfo));
          setLoading(false);
          reset();
          routeTo("/dashboard");
        })
        .catch((error) => {
          catchErr(error);
          setLoading(false);
        });
    } else {
      toastError("Passwords must match", setLoading);
    }
  } else {
    toastError("Field's can't be empty", setLoading);
  }
};

// sign in a user
export const BE_signIn = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  routeTo: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, password } = data;
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
      //update user info
      await updateUserInfo({ id: user.uid, isOnline: true });
      // get user info
      const userInfo = await getUserInfo(user.uid);
      // set user in store
      dispatch(setUser(userInfo));
      setLoading(false);
      reset();
      routeTo("/dashboard");
    })
    .catch((err: any) => {
      catchErr(err);
      setLoading(false);
    });
};

// add user to collection
export const addUserToCollection = async (
  id: string,
  email: string,
  username: string,
  img: string
) => {
  await setDoc(doc(db, Collections.USERSCOLL, id), {
    isOnline: true,
    img,
    username,
    email,
    creationTime: serverTimestamp(),
    lastSeen: serverTimestamp(),
    bio: `Hey there! My name is ${username}`,
  });
  return getUserInfo(id);
};

// get user information
const getUserInfo = async (id: string): Promise<userType> => {
  const userRef = doc(db, Collections.USERSCOLL, id);
  const user = await getDoc(userRef);
  if (user.exists()) {
    const { img, isOnline, username, bio, email, creationTime, lastSeen } =
      user.data();
    return {
      id: user.id,
      img,
      isOnline,
      email,
      username,
      bio,
      creationTime: creationTime
        ? convertTime(creationTime.toDate())
        : "no-date-yet",
      lastSeen: lastSeen ? convertTime(lastSeen.toDate()) : "no-date-yet",
    };
  } else {
    toastError("getUserInfo:User not found");
    return defaultUser;
  }
};

// update user information
export const updateUserInfo = async ({
  id,
  username,
  img,
  isOffline,
  isOnline,
}: {
  id?: string;
  username?: string;
  img?: string;
  isOffline?: boolean;
  isOnline?: boolean;
}) => {
  if (!id) {
    id = getStorageUser().id;
  }
  if (id) {
    await updateDoc(doc(db, Collections.USERSCOLL, id), {
      ...(username && { username }),
      ...(img && { img }),
      ...(isOnline && { isOnline }),
      ...(isOffline && { isOnline: false }),
      lastSeen: serverTimestamp(),
    });
  }
};

// get user from local storage
export const getStorageUser = () => {
  const usr = localStorage.getItem("user");
  if (usr) return JSON.parse(usr);
  else return null;
};

// sign out
export const BE_signOut = (
  dispatch: AppDispatch,
  routeTo: NavigateFunction,
  setLogoutLoading: setLoadingType
) => {
  // setting logoutloading state for spinner in logout dropdown
  setLogoutLoading(true);

  // logout in firebase
  signOut(auth)
    .then(async () => {
      // set user offline
      await updateUserInfo({ isOffline: true });

      //  set current  user to empty/defaultuser
      dispatch(setUser(defaultUser));

      // remove from local storage
      localStorage.removeItem("user");

      // remove current page from local storage
      localStorage.removeItem("user-page");

      // route to login page
      routeTo("/auth");

      // setting logout loading state to false after successfull logout
      setLogoutLoading(false);
    })
    .catch((err) => {
      catchErr(err);

      // setting logout loading state to false after unsuccessfull logout
      setLogoutLoading(false);
    });
};
