import Background from "../components/base/Background/Background";
import PageHeader from "../components/base/Header/Header";
import PokemonDetail from "../components/containers/PokemonDetails/PokemonDetail";
import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetailsPage = () => {
  const { id } = useParams();

  const link = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return (
    <>
      <Background />
      <PageHeader title={"Pokemon Info"} />
      <PokemonDetail link={link} />
    </>
  );
};

export default PokemonDetailsPage;
