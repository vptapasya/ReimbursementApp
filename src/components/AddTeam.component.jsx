import React from "react";

const AddTeamComponent = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="mb-2">
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Team Id
        </label>
        <input
          type="text"
          name="id"
          id="id"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Team Id"
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Team Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Team Name"
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="level"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Team Level
        </label>
        <input
          type="text"
          name="level"
          id="level"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Team Level"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Password"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="confrimPassword"
          className="block mb-2 text-sm font-medium text-slate-950 "
        >
          Confrim Password
        </label>
        <input
          type="password"
          name="level"
          id="level"
          className="bg-slate-50 border border-slate-300 text-slate-900 rounded p-1 px-2 w-full"
          placeholder="Confrim Password"
        />
      </div>

      <button className="w-full text-slate-50 bg-slate-600 rounded text-sm px-5 py-2.5 text-center">
        Save Team
      </button>
    </div>
  );
};

export default AddTeamComponent;
