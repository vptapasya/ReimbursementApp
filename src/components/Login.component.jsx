import React, { useState } from "react";
import Lottie from "lottie-react";

import loginJson from "../assests/login.json";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [loginUser, setLoginUser] = useState({ name: "", password: "" });

  return (
    <div className="p-8 border rounded-2xl bg-white flex flex-col">
      <Lottie
        className="w-full h-32 flex items-center"
        animationData={loginJson}
        loop={true}
      />
      <div className="p-6 space-y-4">
        <h1 className="text-xl font-mono text-slate-950 my-8">
          Sign in to your account
        </h1>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-slate-950 "
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-72"
            placeholder="Name"
            value={loginUser.name}
            onChange={(e) =>
              setLoginUser({ ...loginUser, name: e.target.value })
            }
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-slate-950 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-72"
            value={loginUser.password}
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
          />
        </div>

        <button
          className="w-full text-slate-50 bg-slate-600 rounded text-sm px-5 py-2.5 text-center"
          onClick={() => {
            login(loginUser);
            if (loginUser.name === "admin") navigate("/admin/");
            else navigate("/");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
