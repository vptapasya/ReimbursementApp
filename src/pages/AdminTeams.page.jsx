import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/Header.component";
import TeamListComponent from "../components/TeamList.component";
import DialogComponent from "../components/Dialog.component";
import AddTeamComponent from "../components/AddTeam.component";
import { FETCH_TEAMS } from "../utils";
import { useAuthContext } from "../context/AuthContext";

const INITAL_STATE = {
  title: "Add Team",
  body: <AddTeamComponent />,
  isOpen: false,
};

const AdminTeamspage = () => {
  const { setTeams } = useAuthContext();
  const [dialog, setDialog] = useState(INITAL_STATE);

  const getAllTeamsHandler = async () => {
    setTeams(await FETCH_TEAMS());
  };

  useEffect(() => {
    getAllTeamsHandler();
  }, [dialog]);

  return (
    <div>
      <HeaderComponent title="Teams List" />
      {dialog.isOpen && (
        <DialogComponent
          dialog={dialog}
          onClose={() =>
            setDialog({
              ...dialog,
              isOpen: false,
            })
          }
        />
      )}
      <div className="mx-8 mb-8 flex justify-end">
        <button
          className="text-emerald-50 bg-emerald-600 rounded text-sm px-5 py-2.5 text-center"
          onClick={() =>
            setDialog({
              ...dialog,
              body: (
                <AddTeamComponent
                  onClose={() =>
                    setDialog({
                      ...dialog,
                      isOpen: false,
                    })
                  }
                />
              ),
              isOpen: true,
            })
          }
        >
          Add Team
        </button>
      </div>
      <div className="mx-8">
        <TeamListComponent />
      </div>
    </div>
  );
};

export default AdminTeamspage;
