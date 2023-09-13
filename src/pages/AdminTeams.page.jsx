import React, { useState } from "react";
import HeaderComponent from "../components/Header.component";
import TeamListComponent from "../components/TeamList.component";
import DialogComponent from "../components/Dialog.component";
import AddTeamComponent from "../components/AddTeam.component";

const INITAL_STATE = {
  title: "Add Team",
  body: <AddTeamComponent />,
  isOpen: false,
};

const AdminTeamspage = () => {
  const [dialog, setDialog] = useState(INITAL_STATE);

  const dialogClose = () => setDialog({ ...dialog, isOpen: false });

  return (
    <div>
      <HeaderComponent title="Teams List" />
      {dialog.isOpen && (
        <DialogComponent dialog={dialog} onClose={dialogClose} />
      )}
      <div className="mx-8 mb-8 flex justify-end">
        <button
          className="text-slate-50 bg-slate-600 rounded text-sm px-5 py-2.5 text-center"
          onClick={() => setDialog({ ...dialog, isOpen: true })}
        >
          Add Team
        </button>
      </div>
      <div className="mx-8">
        <TeamListComponent />
      </div>
    </div>
  );
};

export default AdminTeamspage;
