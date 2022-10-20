import { _Background } from "./_Background";
import Pokedex from "../../../images/pokedex.jpg";
import React from "react";

const Background = () => {
  return (
    <_Background>
      <img src={Pokedex} alt="pokedex"></img>
    </_Background>
  );
};

export default Background;
