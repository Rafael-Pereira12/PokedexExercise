import { _Card } from "./_PokemonCard";
import { Link } from "react-router-dom";
import React from "react";
import Silhouette from "../../../images/silhouette.png";

const PokemonCard = ({ pokemonList, id }) => {
  return (
    <>
      {pokemonList &&
        pokemonList.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.id}`}>
              <_Card key={pokemon.id}>
                <div className="number-container">
                  <h1>{pokemon.id}</h1>
                </div>
                <div className="name-container">
                  <h1>{pokemon.name}</h1>
                </div>
                <div className="sprite-container">
                  {pokemon.sprites.front_default !== null ? (
                    <img
                      className="pokemonImage"
                      src={pokemon.sprites.front_default}
                      alt="pokemon"
                    />
                  ) : (
                    <img
                      className="pokemonSilhouette"
                      src={Silhouette}
                      alt="silhouette"
                    />
                  )}
                </div>
              </_Card>
            </Link>
          );
        })}
    </>
  );
};

export default PokemonCard;
