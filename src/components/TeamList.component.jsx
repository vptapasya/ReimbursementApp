import React, { useState } from "react";
import TeamItemComponent from "./TeamItem.component";

const dummyTeams = [
  { id: 101, name: "Rocket", level: "Low" },
  { id: 121, name: "Leo", level: "Low" },
  { id: 141, name: "Knight", level: "Low" },
  { id: 111, name: "King", level: "Low" },
  { id: 161, name: "Moon", level: "Low" },
];

const TeamListComponent = () => {
  const [teams, setTeams] = useState(dummyTeams);
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {teams.map((team) => (
        <TeamItemComponent key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamListComponent;
