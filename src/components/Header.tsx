import React, { useState } from "react";
import AddListBoard from "./AddListBoard";
import Icon from "./Icon";
import { BsChatFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";
import UserHeaderProfile from "./UserHeaderProfile";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { BE_signOut } from "../Backend/Queries";
const logo = require("../assets/logo.webp");
type Props = {};

const Header = (props: Props) => {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const dispatch = useDispatch();
  const routeTo = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const handleSignout = () => {
    BE_signOut(dispatch, routeTo, setLogoutLoading);
  };
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
              <div className='block px-4 py-2 hover:bg-gray-200'>Profile</div>
              <div
                onClick={() => !logoutLoading && handleSignout()}
                className={`flex flex-row items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                  logoutLoading && "cursor-wait"
                }`}
              >
                Logout
                {logoutLoading && <Spinner />}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
