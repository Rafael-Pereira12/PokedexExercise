import Background from "../components/base/Background/Background";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/base/Header/Header";
import PokemonCard from "../components/containers/PokemonCard/PokemonCard";
import Wrapper from "../components/common/Wrapper/Wrapper";

const FavoritesListPage = () => {
  const [favorites, setFavorites] = useState([]);
  const getFavorites = JSON.parse(localStorage.getItem("favorites"));

  //it takes the array values stored by getFavorites and it set a new array(favorites) but
  //sorts the array by id before setting the values in the new array
  const sortFavorites = () => {
    setFavorites(getFavorites.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  useEffect(() => {
    sortFavorites();
  }, []);

  return (
    <div>
      <Background />
      <PageHeader title={"Favorites"} />
      <Wrapper>
        <PokemonCard pokemonList={favorites} id={favorites.id} />
      </Wrapper>
    </div>
  );
};

export default FavoritesListPage;
