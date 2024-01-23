import React from "react";
import { userType } from "../Types";

type Props = {
  user?: userType;
  handleClick?: () => void;
};

const UserHeaderProfile = ({ user, handleClick }: Props) => {
  return (
    <div
      onClick={handleClick}
      className='flex items-center space-x-4 cursor-pointer'
    >
      <div className='relative'>
        <img
          src={`https://api.multiavatar.com/admin.png`}
          alt='user_profile'
          className='rounded-full w-11 h-11 ring-2 p-[2px] ring-white'
        />
        <span className='absolute w-4 h-4 bg-green-600 border-2 border-gray-800 rounded-full -top-1 left-7'></span>
      </div>
      <div className='hidden md:block'>
        <div className='-mb-1'>admin</div>
        <div className='text-sm text-gray-300 '>Joined in Wed 4th Apr 2023</div>
      </div>
    </div>
  );
};

export default UserHeaderProfile;
