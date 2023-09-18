import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

import { useAuthContext } from "../context/AuthContext";
import { getDownloadURL, ref } from "firebase/storage";
import { fireStore, storage } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

const ClaimsItemComponent = ({ claim, getClaims }) => {
  const { date, place, amount, status, bill, teamName, claimId } = claim;
  const { isAdmin } = useAuthContext();

  const approveHandler = async () => {
    console.log(claimId);
    const updateClaimDoc = doc(fireStore, "claims", claimId);
    await updateDoc(updateClaimDoc, {
      status: "approved",
    });
    getClaims();
  };

  const downloadHandler = async () => {
    const pathReference = ref(storage, `files/${bill}`);
    try {
      const url = await getDownloadURL(pathReference);
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.setAttribute("download", bill);
      link.click();
    } catch (error) {
      console.error("Error getting download URL:", error);
    }
  };

  return (
    <tr className="bg-white border-b">
      {isAdmin() && (
        <th className="px-6 py-4 font-medium text-emerald-900 whitespace-nowrap">
          {teamName}
        </th>
      )}

      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{place}</td>
      <td className="px-10 py-4">${amount}</td>
      {status === "pending" && isAdmin() ? (
        <td className="px-6 py-4">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => {
              approveHandler();
            }}
          >
            <div className=" text-emerald-600 ">Approve</div>
            <div className=" text-emerald-600 ">
              <AiFillCheckCircle />
            </div>
          </div>
        </td>
      ) : (
        <td className="px-6 py-4">{status}</td>
      )}
      <td
        className="px-6 py-4 text-right flex gap-3 justify-center items-center cursor-pointer"
        onClick={() => {
          downloadHandler();
        }}
      >
        <div className=" text-blue-600">Document</div>
        <div className=" text-blue-600">
          <FaRegFilePdf />
        </div>
      </td>
    </tr>
  );
};

export default ClaimsItemComponent;
