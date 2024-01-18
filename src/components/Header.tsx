import React from "react";
import Button from "./Button";
const logo = require("../assets/logo.webp");

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-5 px-5 py-5 text-white bg-gradient-to-r from-myBlue to-myPink md:py-2 drop-shadow-md sm:flex-row'>
      <img
        src={logo}
        alt='logo'
        className='w-[70px] drop-shadow-md cursor-pointer'
      />
      <div className='flex'>
        <Button text='Add New ListBoard' secondary />
      </div>
    </div>
  );
};

export default Header;
