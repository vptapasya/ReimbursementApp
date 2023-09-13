import React from "react";
import { useAuthContext } from "../context/AuthContext";

const ClaimsItemComponent = ({ claim }) => {
  const { date, place, price, status, team } = claim;
  const { isAdmin } = useAuthContext();

  return (
    <div className="border rounded border-slate-200 text-slate-950 bg-slate-300 p-4 mb-2">
      {isAdmin() && (
        <div className="flex text-xl">
          <p className="min-w-[12vw] font-semibold mr-3 mb-1">Team</p>
          <p>{team}</p>
        </div>
      )}
      <div className="flex text-xl">
        <p className="min-w-[12vw] font-semibold mr-3 mb-1">Date purchased</p>
        <p>{date}</p>
      </div>
      <div className="flex text-xl">
        <p className="min-w-[12vw] font-semibold mr-3 mb-1">Purchased at</p>
        <p>{place}</p>
      </div>
      <div className="flex text-xl">
        <p className="min-w-[12vw] font-semibold mr-3 mb-1">Amount</p>
        <p>$ {price}</p>
      </div>
      <div className="flex text-xl">
        <p className="min-w-[12vw] font-semibold mr-3 mb-1">Status</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default ClaimsItemComponent;
