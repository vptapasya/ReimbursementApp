import React from "react";
import { useAuthContext } from "../context/AuthContext";

const ClaimItemHeaderComponent = () => {
  const { isAdmin } = useAuthContext();

  return (
    <thead className="text-xs text-emerald-700 uppercase bg-emerald-50 ">
      <tr>
        {isAdmin() && (
          <th scope="col" className="px-6 py-3">
            Team Name
          </th>
        )}
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Purchased at
        </th>
        <th scope="col" className="px-6 py-3">
          Amount
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">View Documents</span>
        </th>
      </tr>
    </thead>
  );
};

export default ClaimItemHeaderComponent;
