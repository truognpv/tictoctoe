import React, { Children } from "react";

import Cell from "./cell";

const Board = (props: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-[500px] h-[500px] grid grid-cols-3 grid-rows-3 gap-6 mb-10">
        {props.cells.map((item: any, index: any, className: any) => (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={
              item === "X"
                ? "text-[#ff6651]"
                : item === "O"
                ? "text-[#2cccff]"
                : ""
            }
          ></Cell>
        ))}
      </div>
      {props.children}
    </div>
  );
};

export default Board;
