import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { IoIosEye, IoMdEyeOff } from "react-icons/io";
import { auth, fireStore, teamsDocsRef } from "../config/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../context/AuthContext";
import { FETCH_TEAMS } from "../utils";

const INITIAL_VALUE = {
  name: "",
  level: "FLL",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
};

const AddTeamComponent = ({ editTeam = null, onClose }) => {
  const { setTeams } = useAuthContext();
  const [passwordEye, setPasswordEye] = useState({
    password: false,
    confirmPassword: false,
  });

  const [team, setTeam] = useState(INITIAL_VALUE);

  const changeHandler = (event) => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  const saveHandler = async () => {
    if (editTeam) {
      const updateTeamDoc = doc(fireStore, "teams", editTeam.id);
      await updateDoc(updateTeamDoc, {
        name: team.name,
        level: team.level,
        email: team.email,
      });
      const updatedTeams = await FETCH_TEAMS();
      setTeams(updatedTeams);
    } else {
      if (team.password !== team.confirmPassword) {
        setTeam({
          ...team,
          error: "Password and Confrim password didn't match!!!",
        });
      } else {
        try {
          await createUserWithEmailAndPassword(auth, team.email, team.password);
          await addDoc(teamsDocsRef, {
            name: team.name,
            level: team.level,
            email: team.email,
            balance: 1000,
            spent: 1000,
          });
        } catch (error) {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use")
            setTeam({ ...team, error: "Email already exists!!!" });
          else setTeam({ ...team, error: "Oops! Something went wrong." });
        }
      }
    }
    onClose();
  };

  useEffect(() => {
    if (editTeam) setTeam(editTeam);
  }, [editTeam]);

  return (
    <div className="p-6 space-y-4">
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Team Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Team Name"
          value={team.name}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="level"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Team Level
        </label>
        <select
          name="level"
          id="level"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          onChange={(e) => changeHandler(e)}
        >
          <option value="FLL" selected={team.level === "FLL"}>
            FLL
          </option>
          <option value="FTL" selected={team.level === "FTL"}>
            FTL
          </option>
        </select>
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Team Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Team Email"
          value={team.email}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      {!editTeam && (
        <div className="mb-2 relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-slate-950 "
          >
            Password
          </label>
          <input
            type={passwordEye.password ? "text" : "password"}
            name="password"
            id="password"
            className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
            placeholder="Password"
            value={team.password}
            onChange={(e) => changeHandler(e)}
          />
          <div
            className="absolute right-3 top-9"
            onClick={() =>
              setPasswordEye({
                ...passwordEye,
                password: !passwordEye.password,
              })
            }
          >
            {passwordEye.password ? <IoIosEye /> : <IoMdEyeOff />}
          </div>
        </div>
      )}
      {!editTeam && (
        <div className="mb-2 relative">
          <label
            htmlFor="confrimPassword"
            className="block mb-2 text-sm font-medium text-slate-950 "
          >
            Confrim Password
          </label>
          <input
            type={passwordEye.confirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
            placeholder="Confrim Password"
            value={team.confirmPassword}
            onChange={(e) => changeHandler(e)}
          />

          <div
            className="absolute right-3 top-9"
            onClick={() =>
              setPasswordEye({
                ...passwordEye,
                confirmPassword: !passwordEye.confirmPassword,
              })
            }
          >
            {passwordEye.confirmPassword ? <IoIosEye /> : <IoMdEyeOff />}
          </div>
        </div>
      )}

      {team.error ? (
        <p className="text-red-500 h-4">{team.error}</p>
      ) : (
        <p className="h-4"></p>
      )}

      <button
        className="w-full text-emerald-50 bg-emerald-600 rounded text-sm px-5 py-2.5 text-center"
        onClick={() => saveHandler()}
      >
        Save Team
      </button>
    </div>
  );
};

export default AddTeamComponent;
