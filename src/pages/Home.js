import React from "react";
import { animes } from "../animes";
import { Anime } from "./Anime";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Anime Collection</h1>
      </div>
      <div className="animes">
        {animes.map((anime) => (
          <Anime data={anime} />
        ))}
      </div>
    </div>
  );
};
