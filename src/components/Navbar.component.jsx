import React from "react";

import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuthContext();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-3 bg-emerald-600">
      <div className="flex justify-between mx-8 ">
        <Link
          to={`${isAdmin() ? "/admin" : "/"}`}
          className="text-xl text-emerald-50 font-mono hover:cursor-pointer"
        >
          Reimbursement
        </Link>
        <div
          className="text-red-500 p-2 cursor-pointer bg-red-50 rounded-full hover:rounded-full hover:bg-red-100"
          onClick={() => logoutHandler()}
        >
          <FaPowerOff />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
