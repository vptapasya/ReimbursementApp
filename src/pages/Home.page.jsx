import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbArrowsExchange } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import CardComponent from "../components/Card.component";
import { useAuthContext } from "../context/AuthContext";
import HeaderComponent from "../components/Header.component";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div className="mt-8">
      <HeaderComponent title={`Welcome ${user.name}`} />
      <div className="flex flex-col items-center">
        <div className="flex w-100">
          <CardComponent
            className="flex-1"
            icon={<RiMoneyDollarCircleFill />}
            label={"Money Left"}
            amount={user.balance}
          />
          <CardComponent
            className="flex-1"
            icon={<GiTakeMyMoney />}
            label={"Money Spent"}
            amount={user.spent}
          />
        </div>
        <div className="flex items-center justify-center w-100">
          <CardComponent
            icon={<TbArrowsExchange />}
            label={"Reimburse"}
            onClick={() => navigate("/claims")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
