import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AddTeamComponent from "./AddTeam.component";
import DialogComponent from "./Dialog.component";

const INITAL_STATE = {
  title: "Edit Team",
  body: <AddTeamComponent />,
  isOpen: false,
};

const TeamItemComponent = ({ team, openDialog }) => {
  const { id, email, name, level, balance, spent } = team;
  const [dialog, setDialog] = useState(INITAL_STATE);

  return (
    <tr className="bg-white border-b">
      {dialog.isOpen && (
        <DialogComponent
          dialog={dialog}
          onClose={setDialog({
            ...dialog,
            isOpen: false,
          })}
        />
      )}
      <th className="px-6 py-4 font-medium text-emerald-900 whitespace-nowrap">
        {name}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{level}</td>
      <td className="px-10 py-4">${balance}</td>
      <td className="px-10 py-4">${spent}</td>
      <td
        className="px-6 py-4 text-right flex gap-3 justify-center items-center cursor-pointer"
        onClick={() => openDialog(id)}
      >
        <div className=" text-blue-600">Edit</div>
        <div className=" text-blue-600">
          <MdModeEditOutline />
        </div>
      </td>
    </tr>
  );
};

export default TeamItemComponent;
