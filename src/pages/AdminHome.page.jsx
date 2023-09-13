import React, { useState } from "react";
import CardComponent from "../components/Card.component";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { TbArrowsExchange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/Header.component";
import DialogComponent from "../components/Dialog.component";
import AddMoneyComponent from "../components/AddMoney.component";

const INITAL_STATE = {
  title: "Add Money",
  body: <AddMoneyComponent />,
  isOpen: false,
};

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [dialog, setDialog] = useState(INITAL_STATE);

  const dialogClose = () => setDialog({ ...dialog, isOpen: false });

  return (
    <div>
      <HeaderComponent title="Admin Dashboard" />
      {dialog.isOpen && (
        <DialogComponent dialog={dialog} onClose={dialogClose} />
      )}

      <div className="flex flex-col items-center">
        <div>
          <CardComponent
            className="flex-1"
            icon={<HiMiniUserGroup />}
            label={"Team List"}
            onClick={() => navigate("/admin/teams")}
          />
        </div>
        <div className="flex items-center justify-center w-100">
          <CardComponent
            className="flex-1"
            icon={<FaCircleDollarToSlot />}
            label={"Add Money"}
            onClick={() => setDialog({ ...dialog, isOpen: true })}
          />
          <CardComponent
            icon={<TbArrowsExchange />}
            label={"Claims"}
            onClick={() => navigate("/admin/claims")}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
