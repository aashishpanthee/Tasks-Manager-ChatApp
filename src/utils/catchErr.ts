import { toastError } from "./toast";

const catchErr = (err: { code?: string }) => {
  const { code } = err;
  if (code === "auth/invalid-email") toastError("Enter a valid email");
  else if (code === "auth/weak-password")
    toastError("Password must be at least 6 characters logn");
  else if (code === "auth/user-not-found") toastError("User not found");
  else if (code === "auth/invalid-password") toastError("Invalid password");
  else if (code === "auth/email-already-exists")
    toastError("Email already exists");
  else if (code === "auth/email-already-in-use")
    toastError("Email already exists");
  else if (code === "auth/invalid-id-token") toastError("Invalid token");
  else if (code === "auth/id-token-expired")
    toastError("Token expired !! Login again");
  else if (code === "auth/invalid-credential")
    toastError("Invalid Credentials");
  else toastError("Something went wrong");
  console.log(err);
};
export default catchErr;
