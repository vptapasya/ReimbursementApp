import React from "react";

const TeamItemComponent = ({ team }) => {
  const { id, name, level } = team;
  return (
    <div className="w-full border rounded border-slate-200 text-slate-950 bg-slate-300 p-4 mb-2">
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">Team Id</p>
        <p>{id}</p>
      </div>
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">Team Name</p>
        <p>{name}</p>
      </div>
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">{level}</p>
        <p>Low</p>
      </div>
    </div>
  );
};

export default TeamItemComponent;
