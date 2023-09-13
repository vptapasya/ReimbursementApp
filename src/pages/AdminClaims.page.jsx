import React from "react";
import HeaderComponent from "../components/Header.component";
import ClaimsListComponent from "../components/ClaimsList.component";

const AdminClaimsPage = () => {
  return (
    <div>
      <HeaderComponent title={"Claims"} />
      <div className="mx-8 flex justify-end">
        <button className="text-slate-50 bg-slate-600 rounded text-sm px-5 py-2.5 text-center">
          Add Claim
        </button>
      </div>
      <div className="mx-8 mt-8">
        <ClaimsListComponent />
      </div>
    </div>
  );
};

export default AdminClaimsPage;
