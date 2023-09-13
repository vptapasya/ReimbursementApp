import React, { useState } from "react";
import HeaderComponent from "../components/Header.component";
import ClaimsListComponent from "../components/ClaimsList.component";
import DialogComponent from "../components/Dialog.component";
import AddClaimComponent from "../components/AddClaim.component";

const INITAL_STATE = {
  title: "Add Claim",
  body: <AddClaimComponent />,
  isOpen: false,
};

const ClaimsPage = () => {
  const [dialog, setDialog] = useState(INITAL_STATE);

  const dialogClose = () => setDialog({ ...dialog, isOpen: false });

  return (
    <div>
      <HeaderComponent title={"Claims"} />
      {dialog.isOpen && (
        <DialogComponent dialog={dialog} onClose={dialogClose} />
      )}
      <div className="mx-8 flex justify-end">
        <button
          className="text-slate-50 bg-slate-600 rounded text-sm px-5 py-2.5 text-center"
          onClick={() => setDialog({ ...dialog, isOpen: true })}
        >
          Add Claim
        </button>
      </div>
      <div className="mx-8 mt-8">
        <ClaimsListComponent />
      </div>
    </div>
  );
};

export default ClaimsPage;
