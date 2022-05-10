import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index: any) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  const handleUndo = () => {};

  return (
    <div>
      <Board cells={board} onClick={handleClick}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-lg font-extrabold text-blue-600">
            {winner ? `Winner is ${winner}` : ""}
          </div>
          <div className="flex gap-10">
            <button
              onClick={handleResetGame}
              className="p-3 text-red-800 bg-blue-200 border rounded-lg w-28"
            >
              Reset game
            </button>
            <button
              onClick={handleUndo}
              className="p-3 text-red-800 bg-blue-200 border rounded-lg w-28"
            >
              Undo
            </button>
          </div>
        </div>
      </Board>
    </div>
  );
};

export default Game;
