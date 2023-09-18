import React from "react";

const TeamItemHeaderComponent = () => {
  return (
    <thead className="text-xs text-emerald-700 uppercase bg-emerald-50 ">
      <tr>
        <th scope="col" className="px-6 py-3">
          Team Name
        </th>
        <th scope="col" className="px-6 py-3">
          Team Email
        </th>
        <th scope="col" className="px-6 py-3">
          Level
        </th>
        <th scope="col" className="px-6 py-3">
          Money Left
        </th>
        <th scope="col" className="px-6 py-3">
          Money Spent
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default TeamItemHeaderComponent;
