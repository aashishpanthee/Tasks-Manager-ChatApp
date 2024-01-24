import React from "react";
import AddListBoard from "./AddListBoard";
import Icon from "./Icon";
import { BsChatFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";
import UserHeaderProfile from "./UserHeaderProfile";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
const logo = require("../assets/logo.webp");
type Props = {};

const Header = (props: Props) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
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
        <div className='relative group'>
          <UserHeaderProfile user={currentUser} />
          <div className='absolute hidden w-full pt-5 group-hover:block min-w-max '>
            <ul className='w-full pt-1 overflow-hidden text-gray-700 bg-white rounded-md shadow-md '>
              <Link
                to='/dashboard/profile'
                className='block px-4 py-2 hover:bg-gray-200'
              >
                Profile
              </Link>
              <Link to='/auth' className='block px-4 py-2 hover:bg-gray-200'>
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
