import type { NextPage } from "next";
import "tailwindcss/tailwind.css";

import Game from "../components/game";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Game />
    </div>
  );
};

export default Home;
