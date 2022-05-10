import React from "react";

const Cell = (props: any) => {
  return (
    <div
      className={`flex items-center justify-center text-4xl font-medium border shadow-2xl cursor-pointer ${props.className}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Cell;
