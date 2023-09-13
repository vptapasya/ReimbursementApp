import React from "react";
import HeaderComponent from "../components/Header.component";
import ClaimsListComponent from "../components/ClaimsList.component";

const AdminClaimsPage = () => {
  return (
    <div>
      <HeaderComponent title={"Claims"} />
      <div className="mx-8 mt-8">
        <ClaimsListComponent />
      </div>
    </div>
  );
};

export default AdminClaimsPage;
