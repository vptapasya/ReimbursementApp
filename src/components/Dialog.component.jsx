import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DialogComponent = ({ dialog, onClose }) => {
  const { title, body } = dialog;

  return (
    <div className="fixed top-0 bg-slate-100 bg-opacity-50 w-screen h-screen">
      <div className="fixed top-1/3 left-1/3 z-50 w-full p-4 overflow-x-hidden overflow-y-auto max-h-full">
        <div className="relative w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex justify-between px-6 py-6">
              <h3 className="text-xl font-medium text-slate-950">{title}</h3>
              <div className="text-2xl text-red-500" onClick={() => onClose()}>
                <AiOutlineClose />
              </div>
            </div>

            <div className="h-[1px] bg-slate-500"></div>

            <div className="bg-white">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogComponent;
