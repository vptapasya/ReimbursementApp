import React from "react";
import HeaderComponent from "../components/Header.component";
import TeamListComponent from "../components/TeamList.component";

const AdminTeamspage = () => {
  return (
    <div>
      <HeaderComponent title="Teams List" />
      <div className="mx-8">
        <TeamListComponent />
      </div>
    </div>
  );
};

export default AdminTeamspage;
