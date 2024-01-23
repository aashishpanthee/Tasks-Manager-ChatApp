import React from "react";
import AddListBoard from "./AddListBoard";
import Icon from "./Icon";
import { BsChatFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";
import UserHeaderProfile from "./UserHeaderProfile";
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
      <div className='flex flex-row-reverse items-center justify-center gap-5 md:flex-row flexwrap'>
        <AddListBoard />
        <Icon IconName={BsChatFill} ping={true} />
        <Icon IconName={FiList} />
        <UserHeaderProfile />
      </div>
    </div>
  );
};

export default Header;
