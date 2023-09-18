import React from "react";
import Lottie from "lottie-react";

import loading from "../assests/loading.json";
import ClaimItemHeaderComponent from "./ClaimItemHeader.component";
import ClaimsItemComponent from "./ClaimsItem.component";

const ClaimsListComponent = ({ claims, getClaims }) => {
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {claims.length === 0 && (
        <Lottie
          className="w-full h-32 flex items-center"
          animationData={loading}
          loop={true}
        />
      )}

      {claims.length > 0 && (
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left text-emerald-950 ">
            <ClaimItemHeaderComponent />
            <tbody>
              {claims.map((claim) => (
                <ClaimsItemComponent
                  key={claim.id}
                  claim={claim}
                  getClaims={getClaims}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClaimsListComponent;
