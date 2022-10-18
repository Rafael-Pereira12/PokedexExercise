import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  //  const getPokemon = async () => {
  //     const result = await axios.get(url);
  //  }

  const fetchPokemonList = async () => {
    const result = await axios.get(url);
    //setPokemonList((pokemonList) => [...pokemonList, result.data.results]);
    pokemonList.push(result.data.results);
    console.log(pokemonList);
    // response.map(async (item) => {
    //   const pokemon = await axios.get(item.url);

    //   setPokemonList((state) => {
    //     state = [...state, pokemon.data];
    //     state.sort((a, b) => (a.id > b.id ? 1 : -1));
    //     return state;
    //   });
    // });
  };

  useEffect(() => {
    fetchPokemonList();
  }, [url]);

  return <h1>Pokedex</h1>;
};

export default MainPage;
