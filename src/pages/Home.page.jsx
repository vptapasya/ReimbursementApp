import React from "react";
import { useNavigate } from "react-router-dom";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbArrowsExchange } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import CardComponent from "../components/Card.component";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center">
        <div className="flex w-100">
          <CardComponent
            className="flex-1"
            icon={<RiMoneyDollarCircleFill />}
            label={"Money Left"}
            amount={1000}
          />
          <CardComponent
            className="flex-1"
            icon={<GiTakeMyMoney />}
            label={"Money Spent"}
            amount={200}
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
