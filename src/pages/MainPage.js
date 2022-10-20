import axios from "axios";
import Background from "../components/base/Background/Background";
import PageHeader from "../components/base/Header/Header";
import PokemonCard from "../components/containers/PokemonCard/PokemonCard";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper/Wrapper";
import PagesButton from "../components/containers/PagesButton/PagesButton";

const MainPage = () => {
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  //API request in order to get a 20 Pokemon list from pokeapi, also set the URL for the next or previous 20, if able
  const getPokemonList = async (url) => {
    const result = await axios.get(url);
    setNextUrl(result.data.next);
    setPreviousUrl(result.data.previous);
    getPokemon(result.data.results);
  };

  //API request that receives the data from getPokemonList and iterates the list in order to request all the data from a single Pokemon
  //inserts that pokemon in an array as well as sorts the array by Id
  const getPokemon = async (pokemon) => {
    pokemon.map(async (item) => {
      const result = await axios.get(item.url);

      setPokemonList((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  //function to be used as an onClick, receives a boolean, isNext, and according to that variable, it empties the current list and sets
  //the URL for the next or previous list of 20 Pokemon
  const handlePage = (isNext) => {
    if (isNext) {
      setPokemonList([]);
      setUrl(nextUrl);
    } else {
      setPokemonList([]);
      setUrl(previousUrl);
    }
  };

  //runs getPokemonList function everytime the url variable changes
  useEffect(() => {
    getPokemonList(url);
  }, [url]);

  //verifies if the local storage variable favorites exist, if it doesn't, initializes the variable favorites as an empty array
  useEffect(() => {
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Background />
      <PageHeader title={"Pokedex"} />
      <ButtonsContainer>
        {previousUrl ? (
          <PagesButton
            direction={"prevArrow"}
            pagesCallback={() => handlePage(false)}
          />
        ) : (
          <>
            <PagesButton direction={"prevArrowDisabled"} />
          </>
        )}
        {nextUrl ? (
          <PagesButton
            direction={"nextArrow"}
            pagesCallback={() => handlePage(true)}
          />
        ) : (
          <>
            <PagesButton direction={"nextArrowDisabled"} />
          </>
        )}
      </ButtonsContainer>
      <Wrapper>
        <PokemonCard pokemonList={pokemonList} />
      </Wrapper>
    </>
  );
};

const ButtonsContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
export default MainPage;
