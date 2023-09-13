import React from "react";

const HeaderComponent = ({ title }) => {
  return (
    <div className="m-8">
      <h1 className="text-3xl text-slate-950 font-mono mb-2">{title}</h1>
      <div className="h-[1px] bg-slate-500"></div>
    </div>
  );
};

export default HeaderComponent;
