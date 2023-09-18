import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import TeamItemComponent from "./TeamItem.component";
import loading from "../assests/loading.json";
import DialogComponent from "./Dialog.component";
import AddTeamComponent from "./AddTeam.component";
import TeamItemHeaderComponent from "./TeamItemHeader.component";
import { FETCH_TEAMS } from "../utils";
import { useAuthContext } from "../context/AuthContext";

const INITAL_STATE = {
  title: "Edit Team",
  body: <AddTeamComponent />,
  isOpen: false,
};

const TeamListComponent = () => {
  const { teams, setTeams } = useAuthContext();
  const [dialog, setDialog] = useState(INITAL_STATE);

  const getAllTeams = async () => {
    setTeams(await FETCH_TEAMS());
  };

  useEffect(() => {
    getAllTeams();
  }, [dialog]);

  return (
    <div className="flex gap-4 w-full flex-wrap">
      {teams.length === 0 && (
        <Lottie
          className="w-full h-32 flex items-center"
          animationData={loading}
          loop={true}
        />
      )}
      {dialog.isOpen && (
        <DialogComponent
          dialog={dialog}
          onClose={() => setDialog({ ...dialog, isOpen: false })}
        />
      )}
      {teams.length > 0 && (
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left text-emerald-950 ">
            <TeamItemHeaderComponent />
            <tbody>
              {teams.map((team) => (
                <TeamItemComponent
                  key={team.id}
                  team={team}
                  openDialog={(id) => {
                    setDialog({
                      ...dialog,
                      body: (
                        <AddTeamComponent
                          editTeam={teams.find((t) => t.id === id)}
                          onClose={() =>
                            setDialog({
                              ...dialog,
                              isOpen: false,
                            })
                          }
                        />
                      ),
                      isOpen: true,
                    });
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TeamListComponent;
