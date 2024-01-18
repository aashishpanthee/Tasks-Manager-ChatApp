import React from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  return (
    <div className='w-full md:w-[450px]'>
      <h1 className='mb-10 text-4xl font-bold text-center text-white md:text-6xl'>
        Login
      </h1>
      <div className='bg-white w-full p-6 min-h-[150px] flex flex-col gap-3 rounded-xl'>
        <Input name='email' type='email' />
        <Input name='password' type='password' />
        <Input name='confirm password' type='password' />
        <Button text='Login' className='' loading/>
        <Button text='Register' className='' secondary />
      </div>
    </div>
  );
};

export default Login;
