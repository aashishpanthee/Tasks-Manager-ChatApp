import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className='flex flex-col h-screen '>
      <Header />
      <div className='flex-1 bg-pattern max-h-[90%] overflow-y-scroll'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
