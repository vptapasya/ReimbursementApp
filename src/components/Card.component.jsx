import React from "react";

const CardComponent = ({
  className,
  icon,
  label,
  amount,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={`h-60 w-80 bg-slate-100 border border-slate-400 flex flex-col justify-center rounded m-2 hover:cursor-pointer ${className}`}
    >
      <div className="text-amber-500 text-5xl flex justify-center mb-2">
        {icon}
      </div>
      <p className="text-3xl font-light text-center">{label}</p>
      {amount && <p className="text-xl text-center">$ {amount}</p>}
    </div>
  );
};

export default CardComponent;
