import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { fireStore } from "../config/firebase";
import { FETCH_TEAMS } from "../utils";

const AddMoneyComponent = ({ onClose = null }) => {
  const { teams, setTeams } = useAuthContext();
  const [id, setId] = useState(0);
  const [balance, setBalance] = useState("");

  const addBalance = async () => {
    const updateTeamDoc = doc(fireStore, "teams", id);
    const team = teams.find((team) => team.id === id);
    await updateDoc(updateTeamDoc, {
      balance: parseInt(team.balance) + parseInt(balance),
    });
    const updatedTeams = await FETCH_TEAMS();
    setTeams(updatedTeams);
    onClose();
  };

  return (
    <div className="p-6 space-y-4">
      <div className="mb-2">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Amount
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={balance}
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Amount"
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="team"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Select a Team
        </label>
        <select
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          onChange={(e) => setId(e.target.value)}
        >
          <option value="0" selected={id === 0}>
            Choose a Team
          </option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="w-full text-emerald-50 bg-emerald-600 rounded text-sm px-5 py-2.5 text-center"
        onClick={() => addBalance()}
      >
        Add
      </button>
    </div>
  );
};

export default AddMoneyComponent;
