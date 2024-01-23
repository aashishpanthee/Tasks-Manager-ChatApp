import React from "react";
import { IconType } from "react-icons";

type IconProps = {
  IconName: IconType;
  size?: number;
  className?: string;
  loading?: boolean;
  ping?: boolean;
  onClick?: () => void;
  reduceOpacityOnHover?: boolean;
};

const Icon = ({
  IconName,
  className,
  loading,
  onClick,
  ping,
  reduceOpacityOnHover,
  size = 20,
}: IconProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`p-3 rounded-full cursor-pointer hover:bg-myBlue relative ${
        reduceOpacityOnHover
          ? "hover:bg-opacity-30"
          : "bg-myBlue text-white border-2 border-white hover:drop-shadow-lg"
      }${loading && "cursor-wait"} ${className}`}
    >
      {loading ? "Loading" : <IconName size={size} />}
      {ping && (
        <>
          <span className='absolute w-3 h-3 border-2 border-gray-800 rounded-full left-7 -top-1 bg-myPink'></span>
          <span className='absolute w-3 h-3 border-2 border-gray-800 rounded-full animate-ping left-7 -top-1 bg-myPink'></span>
        </>
      )}
    </button>
  );
};

export default Icon;
