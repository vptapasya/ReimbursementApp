import React from "react";

const CardComponent = ({
  className,
  icon,
  label,
  amount = null,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={() => onClick()}
      className={`h-60 w-80 bg-emerald-50 border border-emerald-400 flex flex-col justify-center rounded m-2 hover:cursor-pointer ${className}`}
    >
      <div className="text-emerald-600 text-5xl flex justify-center mb-2">
        {icon}
      </div>
      <p className="text-xl text-emerald-950 font-medium text-center">
        {label}
      </p>
      {amount !== null && (
        <p className="text-5xl text-emerald-950 my-2 text-center">$ {amount}</p>
      )}
    </div>
  );
};

export default CardComponent;
