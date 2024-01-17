import React from "react";

const Login = () => {
  return (
    <div className='bg-blue-600 h-screen flex items-center justify-center'>
      {/* Login */}
      <div className='w-full md:w-[450px]'>
        <h1 className='text-center font-bold text-4xl text-white md:text-6xl mb-10'>
          Login
        </h1>
        <div className='bg-white w-full p-6 min-h-[150px] flex flex-col gap-3 rounded-xl'>
          <input
            type='text'
            placeholder='Enter your name'
            className='bg-transparent flex-1 border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300'
          />
          <input
            type='text'
            placeholder='Enter your name'
            className='bg-transparent flex-1 border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300'
          />
          <input
            type='text'
            placeholder='Enter your name'
            className='bg-transparent flex-1 border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
