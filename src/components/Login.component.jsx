import React, { useState } from "react";
import Lottie from "lottie-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import loginJson from "../assests/login.json";
import { useAuthContext } from "../context/AuthContext";
import { auth, teamsDocsRef } from "../config/firebase";
import { getDocs } from "firebase/firestore";
import { FETCH_TEAMS } from "../utils";

const INITIAL_VALUE = {
  email: "",
  password: "",
  error: false,
};

const LoginComponent = () => {
  const navigate = useNavigate();
  const { login, setTeams } = useAuthContext();
  const [loginUser, setLoginUser] = useState(INITIAL_VALUE);

  // admin@admin.com - admin123
  // team@team.com - team123

  const loginHandler = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginUser.email,
        loginUser.password
      );
      const teams = await FETCH_TEAMS();
      setLoginUser(INITIAL_VALUE);
      if (loginUser.email === "admin@admin.com") {
        login({ email: loginUser.email });
        setTeams(teams);
        navigate("/admin/");
      } else {
        const loggedInTeam = teams.find(
          (team) => team.email === loginUser.email
        );
        login(loggedInTeam);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoginUser({ ...loginUser, error: true });
    }
  };

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
            value={loginUser.email}
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
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

        {loginUser.error ? (
          <p className="text-red-500 h-4">Invalid email or password!!!</p>
        ) : (
          <p className="h-4"></p>
        )}

        <button
          className="w-full text-emerald-50 bg-emerald-600 rounded text-sm px-5 py-2.5 text-center"
          onClick={() => {
            loginHandler();
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
