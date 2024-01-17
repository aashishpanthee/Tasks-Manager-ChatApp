import React from "react";

type InputProps = {
  name: string;
  value?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
const Input = ({
  name,
  value,
  type = "text",
  className,
  disabled,
  onChange,
  onKeyDown,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={`Enter ${name}`}
      className={`bg-transparent flex-1 border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300 ${className}`}
    />
  );
};

export default Input;
