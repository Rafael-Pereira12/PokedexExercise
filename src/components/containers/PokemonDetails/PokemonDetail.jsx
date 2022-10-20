import axios from "axios";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Background from "../../../images/background.png";
import {
  _DetailsContainer,
  _DetailsWrapper,
  _HeaderDetails,
  _PokemonImageContainer,
} from "./_PokemonDetails";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Silhouette from "../../../images/silhouette.png";

const PokemonDetail = ({ link }) => {
  const [pokemon, setPokemon] = useState();
  const [visible, setVisible] = useState();

  let favoritesArray = JSON.parse(localStorage.getItem("favorites"));

  //requests the Pokemon Info to the API using the input parameter the component receives and then
  //sets the response to the pokemon variable declared as a useState
  const fetchPokemonDetails = async () => {
    const result = await axios.get(link);
    setPokemon(result.data);
  };

  //receives a boolean variable as input, if true adds the pokemon to the favorites local storage array
  //if false, removes the pokemon from the array. The fuction is also responsible for changing the favorites icon
  function handleFavorites(addToFavorite) {
    if (addToFavorite === true) {
      favoritesArray.push(pokemon);
      setVisible(true);
    } else {
      favoritesArray = favoritesArray.filter(
        (favorite) => favorite.id !== pokemon.id
      );
      setVisible(false);
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  //when the page loads, the favoritesArrays is iterated in search for the pokemon id in the favorites
  //if it is so, it sets the favorites icon to filled (pokemon is favorite)
  useEffect(() => {
    if (pokemon) {
      setVisible(favoritesArray.some((favorite) => favorite.id === pokemon.id));
    }
  }, [pokemon]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    pokemon && (
      <>
        <_DetailsWrapper>
          <Row>
            <Col xs={12} s={12} m={12}>
              <_HeaderDetails>
                <h1>Nº {pokemon.id}</h1>
                <h1>{pokemon.name}</h1>
                {visible ? (
                  <AiFillStar
                    onClick={() => handleFavorites(false)}
                    size={"2rem"}
                  />
                ) : (
                  <AiOutlineStar
                    onClick={() => handleFavorites(true)}
                    size={"2rem"}
                  />
                )}
              </_HeaderDetails>
            </Col>
          </Row>
          <Col>
            <Col>
              <_PokemonImageContainer>
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
                <img className="background" src={Background} alt="background" />
              </_PokemonImageContainer>
            </Col>
          </Col>
          <Row xs={12} s={12} m={12}>
            <Col xs={12} s={12} m={12}>
              <_DetailsContainer>
                <div className="sizes">
                  <Container>
                    <Row xs={12} s={12} md={12}>
                      <Col>
                        <h5>Height: {pokemon.height} "</h5>
                      </Col>
                      <Col>
                        <h5>Weight: {pokemon.weight} lbs.</h5>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <Col xs={12} s={12} m={12}>
                  <div className="centerContent">
                    <h3>Types</h3>
                  </div>
                </Col>
                <div className="types">
                  {pokemon?.types.map((pokemonTypes) => {
                    return (
                      <h5 key={pokemonTypes.type.name}>
                        {pokemonTypes.type.name}
                      </h5>
                    );
                  })}
                </div>
                <div className="centerContent">
                  <h3>Abilities</h3>
                </div>
                <div className="abilities">
                  {pokemon?.abilities.map((pokemonAbilities) => {
                    return (
                      <h5 key={pokemonAbilities.ability.name}>
                        {pokemonAbilities.ability.name}
                      </h5>
                    );
                  })}
                </div>
                <Row>
                  <div className="centerContent">
                    <h3>Held Items:</h3>
                  </div>
                </Row>
                <Row>
                  <div className="items">
                    {pokemon?.held_items.map((pokemonItems) => {
                      return (
                        <h5 key={pokemonItems.item}>
                          {pokemonItems.item.name}
                        </h5>
                      );
                    })}
                  </div>
                </Row>

                <Row>
                  <Col>
                    <h3>Stat</h3>
                  </Col>
                  <Col>
                    <h3>Stat Value</h3>
                  </Col>
                  <Col>
                    <h3>Effort Value</h3>
                  </Col>
                </Row>
                <Row>
                  <div className="stats">
                    {pokemon?.stats.map((pokemonStats) => {
                      return (
                        <Row>
                          <Col md={4}>
                            <h5 key={pokemonStats.stat.name}>
                              {pokemonStats.stat.name}
                            </h5>
                          </Col>
                          <Col>
                            <h5 key={pokemonStats.stat.name}>
                              {pokemonStats.base_stat}
                            </h5>
                          </Col>
                          <Col>
                            <h5 key={pokemonStats.stat.name}>
                              {pokemonStats.effort}
                            </h5>
                          </Col>
                        </Row>
                      );
                    })}
                  </div>
                </Row>
              </_DetailsContainer>
            </Col>
          </Row>
        </_DetailsWrapper>
      </>
    )
  );
};

export default PokemonDetail;
