import React from "react";

import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuthContext();

  return (
    <div className="py-3 bg-slate-600">
      <div className="flex justify-between mx-8 ">
        <Link
          to={`${isAdmin() ? "/admin" : "/"}`}
          className="text-xl text-slate-50 font-mono hover:cursor-pointer"
        >
          Reimbursement
        </Link>
        <div
          className="text-red-500 p-2 cursor-pointer bg-red-50 rounded-full hover:rounded-full hover:bg-red-100"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <FaPowerOff />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
