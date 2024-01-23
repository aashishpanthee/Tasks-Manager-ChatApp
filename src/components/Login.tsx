import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { BE_signIn, BE_signUp } from "../Backend/Queries";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);
  const routeTo = useNavigate();

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = { email, password };
    BE_signIn(data, setSignInLoading, reset, routeTo);
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = { email, password, confirmPassword };
    BE_signUp(data, setSignUpLoading, reset, routeTo);
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className='w-full md:w-[450px]'>
      <h1 className='mb-10 text-4xl font-bold text-center text-white md:text-6xl'>
        {login ? "Login" : "Register"}
      </h1>
      <div className='bg-white w-full p-6 min-h-[150px] flex flex-col gap-3 rounded-xl'>
        <Input
          name='email'
          type='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          name='password'
          type='password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        {!login && (
          <Input
            name='confirm password'
            type='password'
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        )}
        {login ? (
          <>
            <Button
              text='Login'
              onClick={handleSignIn}
              loading={signInLoading}
            />
            <Button text='Register' secondary onClick={() => setLogin(false)} />
          </>
        ) : (
          <>
            <Button
              text='Register'
              onClick={handleSignUp}
              loading={signUpLoading}
            />
            <Button text='Login' secondary onClick={() => setLogin(true)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
