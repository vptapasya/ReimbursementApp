import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import AddTeamComponent from "./AddTeam.component";
import DialogComponent from "./Dialog.component";

const INITAL_STATE = {
  title: "Edit Team",
  body: <AddTeamComponent />,
  isOpen: false,
};

const TeamItemComponent = ({ team }) => {
  const { id, name, level } = team;
  const [dialog, setDialog] = useState(INITAL_STATE);

  const dialogClose = () => setDialog({ ...dialog, isOpen: false });

  return (
    <div className="flex border rounded border-slate-200 text-slate-950 bg-slate-300 p-4 mb-2">
      {dialog.isOpen && (
        <DialogComponent dialog={dialog} onClose={dialogClose} />
      )}
      <div>
        <div className="flex text-xl">
          <p className="min-w-[11vw] font-semibold mr-3 mb-1">Team Id</p>
          <p>{id}</p>
        </div>
        <div className="flex text-xl">
          <p className="min-w-[11vw] font-semibold mr-3 mb-1">Team Name</p>
          <p>{name}</p>
        </div>
        <div className="flex text-xl">
          <p className="min-w-[11vw] font-semibold mr-3 mb-1">Level</p>
          <p>{level}</p>
        </div>
      </div>
      <div
        className="text-slate-800 text-xl flex justify-center mb-2 pl-8 cursor-pointer"
        onClick={() => setDialog({ ...dialog, isOpen: true })}
      >
        <GrEdit />
      </div>
    </div>
  );
};

export default TeamItemComponent;
