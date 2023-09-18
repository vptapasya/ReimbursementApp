import { doc, getDoc, getDocs } from "firebase/firestore";
import { claimsDocsRef, fireStore, teamsDocsRef } from "../config/firebase";

const fetchTeams = async () => {
  try {
    const { docs } = await getDocs(teamsDocsRef);
    return docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.log(error);
  }
};

const fetchClaims = async (id) => {
  try {
    const { docs } = await getDocs(claimsDocsRef);
    const claims = docs
      .map((doc) => ({
        ...doc.data(),
        claimId: doc.id,
      }))
      .filter((claim) => claim.teamId !== id);
    return claims;
  } catch (error) {
    console.log(error);
  }
};

const fetchTeam = async (id) => {
  try {
    const docRef = doc(fireStore, "teams", id);
    const res = await getDoc(docRef);
    return res.data();
  } catch (error) {
    console.log(error);
  }
};

export { fetchTeams, fetchTeam, fetchClaims };
