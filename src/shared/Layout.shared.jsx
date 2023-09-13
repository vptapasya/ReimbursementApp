import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar.component";

const LayoutShared = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};

export default LayoutShared;
