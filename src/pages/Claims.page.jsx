import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/Header.component";
import ClaimsListComponent from "../components/ClaimsList.component";
import DialogComponent from "../components/Dialog.component";
import AddClaimComponent from "../components/AddClaim.component";
import { FETCH_CLAIMS } from "../utils";

const INITAL_STATE = {
  title: "Add Claim",
  body: <AddClaimComponent />,
  isOpen: false,
};

const ClaimsPage = () => {
  const [dialog, setDialog] = useState(INITAL_STATE);
  const [claims, setClaims] = useState([]);

  const dialogClose = () => setDialog({ ...dialog, isOpen: false });

  const closeHandler = () => {
    dialogClose();
    getClaims();
  };

  const getClaims = async () => {
    setClaims(await FETCH_CLAIMS());
  };

  useEffect(() => {
    getClaims();
  }, []);

  return (
    <div>
      <HeaderComponent title={"Claims"} />
      {dialog.isOpen && (
        <DialogComponent dialog={dialog} onClose={dialogClose} />
      )}
      <div className="mx-8 flex justify-end">
        <button
          className="text-emerald-50 bg-emerald-600 rounded text-sm px-5 py-2.5 text-center"
          onClick={() =>
            setDialog({
              ...dialog,
              body: <AddClaimComponent closeHandler={() => closeHandler()} />,
              isOpen: true,
            })
          }
        >
          Add Claim
        </button>
      </div>
      <div className="mx-8 mt-8">
        <ClaimsListComponent claims={claims} getClaims={getClaims} />
      </div>
    </div>
  );
};

export default ClaimsPage;
