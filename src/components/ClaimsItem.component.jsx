import React from "react";

const ClaimsItemComponent = ({ claim }) => {
  const { date, place, price, status } = claim;
  return (
    <div className="w-full border rounded border-slate-200 text-slate-950 bg-slate-300 p-4 mb-2">
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">Date purchased</p>
        <p>{date}</p>
      </div>
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">Purchased at</p>
        <p>{place}</p>
      </div>
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">Amount</p>
        <p>$ {price}</p>
      </div>
      <div className="flex text-xl">
        <p className="font-semibold mr-3 mb-1">Status</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default ClaimsItemComponent;
