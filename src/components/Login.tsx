import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data, "Form Details");
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data = { email, password, confirmPassword };
    console.log(data, "Form Details");
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
            <Button text='Login' onClick={handleSignIn} />
            <Button text='Register' secondary onClick={() => setLogin(false)} />
          </>
        ) : (
          <>
            <Button text='Register' onClick={handleSignUp} />
            <Button text='Login' secondary onClick={() => setLogin(true)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
