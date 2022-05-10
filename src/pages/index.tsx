import { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
import { GameContextProvider } from "../components/GlobalContext";
import Game from "../components/game";

import styles from "../styles/Home.module.css";

export const GameContext = createContext();
const Home = () => {
  const [previousStep, setPreviousStep] = useState(0);
  return (
    <GameContext.Provider
      value={{
        previousStep,
        setPreviousStep,
      }}
    >
      <Game />
    </GameContext.Provider>
  );
};

export default Home;
