import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { toastError } from "../utils/toast";
import catchErr from "../utils/catchErr";
import { authDataType, setLoadingType } from "../Types";
import { NavigateFunction } from "react-router-dom";

export const BE_signUp = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  routeTo: NavigateFunction
) => {
  const { email, password, confirmPassword } = data;
  setLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          setLoading(false);
          reset();
          routeTo("/dashboard");
        })
        .catch((error) => {
          catchErr(error);
          setLoading(false);
        });
    } else {
      toastError("Passwords must match");
      setLoading(false);
    }
  } else {
    toastError("Field's can't be empty");
    setLoading(false);
  }
};

export const BE_signIn = (
  data: authDataType,
  setLoading: setLoadingType,
  reset: () => void,
  routeTo: NavigateFunction
) => {
  const { email, password } = data;
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      setLoading(false);
      reset();
      routeTo("/dashboard");
    })
    .catch((err: any) => {
      catchErr(err);
      setLoading(false);
    });
};
