import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toastError } from "../utils/toast";
import catchErr from "../utils/catchErr";
import { setLoadingType } from "../Types";

export const BE_signUp = (
  data: {
    email: string;
    password: string;
    confirmPassword: string;
  },
  setSignUpLoading: setLoadingType,
  reset: () => void
) => {
  const { email, password, confirmPassword } = data;
  setSignUpLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          setSignUpLoading(false);
          reset();
        })
        .catch((error) => {
          catchErr(error);
          setSignUpLoading(false);
        });
    } else {
      toastError("Passwords must match");
      setSignUpLoading(false);
    }
  } else {
    toastError("Field's can't be empty");
    setSignUpLoading(false);
  }
};
