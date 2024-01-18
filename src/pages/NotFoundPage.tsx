import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className='grid min-h-screen px-6 place-items-center'>
      <div className='px-6 py-24 bg-white rounded-lg shadow-white sm:py-32 drop-shadow-lg'>
        <div className='text-center '>
          <p className='text-base font-semibold text-myPink lg:text-3xl'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='flex items-center justify-center mt-10 gap-x-6'>
            <Link
              to='/'
              className='rounded-md bg-myBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-myPink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Go back home
            </Link>
            <Link to='/' className='text-sm font-semibold text-gray-900'>
              Contact support <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute top-0 w-full h-screen -z-10 opacity-70 bg-gradient-to-r from-myBlue to-myPink' />
      <div className='absolute top-0 w-full h-screen bg-no-repeat bg-cover bg-pattern -z-20' />
    </main>
  );
};

export default NotFoundPage;
