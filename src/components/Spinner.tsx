import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className='w-5 h-5 border-2 rounded-full border-t-myBlue animate-spin'></div>
  );
};

export default Spinner;
