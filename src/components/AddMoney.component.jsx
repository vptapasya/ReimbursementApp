import React from "react";

const AddMoneyComponent = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="mb-2">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Amount
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Amount"
        />
      </div>
   

      <button className="w-full text-slate-50 bg-slate-600 rounded text-sm px-5 py-2.5 text-center">
        Add 
      </button>
    </div>
  );
};

export default AddMoneyComponent;
