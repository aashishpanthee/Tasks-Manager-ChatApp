import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-screen p-6'>
      {/* Login */}
      <Login />
      <div className='absolute top-0 w-full h-screen -z-10 opacity-70 bg-gradient-to-r from-myBlue to-myPink' />
      <div className='absolute top-0 w-full h-screen bg-no-repeat bg-cover bg-pattern -z-20' />
    </div>
  );
};

export default LoginPage;
