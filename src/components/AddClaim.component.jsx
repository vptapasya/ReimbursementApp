import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";

import { claimsDocsRef, fireStore, storage } from "../config/firebase";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../context/AuthContext";
import { FETCH_TEAM } from "../utils";

const INITIAL_VALUE = {
  date: "",
  place: "",
  amount: "",
  bill: "",
};

const AddClaimComponent = ({ closeHandler }) => {
  const { user, login } = useAuthContext();
  const [claimInput, setClaimInput] = useState(INITIAL_VALUE);

  const changeHandler = (event) => {
    setClaimInput({ ...claimInput, [event.target.name]: event.target.value });
  };

  const saveHandler = async () => {
    console.log(claimInput);
    const pdfName = `${Date.now()}.pdf`;

    const filesFolderRef = ref(storage, `files/${pdfName}`);
    try {
      await uploadBytes(filesFolderRef, claimInput.bill);
      console.log({
        teamId: user.id,
        date: claimInput.date,
        place: claimInput.place,
        amount: claimInput.amount,
        bill: pdfName,
        status: "pending",
        teamName: user.name,
      });
      await addDoc(claimsDocsRef, {
        teamId: user.id,
        date: claimInput.date,
        place: claimInput.place,
        amount: claimInput.amount,
        bill: pdfName,
        status: "pending",
        teamName: user.name,
      });
      const updateTeamDoc = doc(fireStore, "teams", user.id);
      await updateDoc(updateTeamDoc, {
        balance: parseInt(user.balance) - parseInt(claimInput.amount),
        spent: parseInt(user.balance) + parseInt(claimInput.amount),
      });
      const updatedUser = await FETCH_TEAM(user.id);
      login(updatedUser);
    } catch (err) {
      console.log(err);
    }
    closeHandler();
  };

  return (
    <div className="p-6 space-y-4">
      <div className="mb-2">
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Purchase Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Purchase Date"
          value={claimInput.date}
          onChange={(e) => changeHandler(e)}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="place"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Place
        </label>
        <input
          type="text"
          name="place"
          id="place"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Place"
          value={claimInput.place}
          onChange={(e) => changeHandler(e)}
        />
      </div>

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
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Amount"
          value={claimInput.amount}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-2">
        <label
          class="block mb-2 text-sm font-medium text-gray-900"
          for="file_input"
        >
          Upload file
        </label>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          id="file_input"
          type="file"
          onChange={(e) =>
            setClaimInput({ ...claimInput, bill: e.target.files[0] })
          }
        />
      </div>
      <button
        className="w-full text-emerald-50 bg-emerald-600 rounded text-sm px-5 py-2.5 text-center"
        onClick={() => saveHandler()}
      >
        Add Claim
      </button>
    </div>
  );
};

export default AddClaimComponent;
