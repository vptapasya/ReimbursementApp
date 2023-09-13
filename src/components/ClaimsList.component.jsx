import React from "react";
import ClaimsItemComponent from "./ClaimsItem.component";

const dummyClaims = [
  {
    id: 1,
    date: "8/1/2023",
    place: "Mercy Electronics",
    price: "100",
    team: "Abcd",
    status: "Pending",
  },
  {
    id: 2,
    date: "8/2/2023",
    place: "Mercy Electronics",
    price: "120",
    team: "Efdg",
    status: "Pending",
  },
  {
    id: 3,
    date: "8/5/2023",
    place: "Mercy Electronics",
    price: "150",
    team: "Abcd",
    status: "Pending",
  },
  {
    id: 4,
    date: "8/10/2023",
    place: "Mercy Electronics",
    price: "120",
    team: "Abcd",
    status: "Pending",
  },
];

const ClaimsListComponent = () => {
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {dummyClaims.map((claim) => (
        <ClaimsItemComponent key={claim.id} claim={claim} />
      ))}
    </div>
  );
};

export default ClaimsListComponent;
