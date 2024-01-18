import React from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  text: string;
  className?: string;
  secondary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
};

const Button = ({
  text = "Button",
  className,
  secondary,
  onClick,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 text-white border-2 flex justify-center gap-3 items-center border-white rounded-full px-9 hover:bg-myPink transition-all hover:drop-shadow-lg  ${
        loading && "cursor-wait"
      } ${secondary ? "bg-myPink" : "bg-myBlue"} ${className}}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
};

export default Button;
