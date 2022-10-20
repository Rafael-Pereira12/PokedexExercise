import styled from "styled-components";

export const _DetailsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const _HeaderDetails = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-transform: capitalize;
  justify-items: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0px 0px 30px #8495a2;
  font-family: "PokemonGame";

  svg {
    color: #f3dc12;
    cursor: pointer;
  }

  h1 {
    font-size: 12px;
    margin: 0;
  }

  @media screen and (max-width: 540px) {
    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 740px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const _DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0px 0px 30px #8495a2;
  font-family: "PokemonGame";
  padding: 2rem;

  .abilities,
  .types,
  .sizes,
  .items,
  .stats {
    margin: 1rem;
  }

  .abilities,
  .types {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .sizes {
    display: flex;
  }

  .centerContent {
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 12px;
    font-weight: 800;
  }

  h5 {
    font-size: 12px;
    font-weight: 200;
  }

  @media screen and (max-width: 540px) {
    h3 {
      font-size: 20px;
    }

    h5 {
      font-size: 20px;
      font-weight: 200;
    }
  }
`;

export const _PokemonImageContainer = styled.section`
  display: flex;
  height: 20rem;
  width: 20rem;
  justify-content: center;
  align-items: center;

  .pokemonImage {
    z-index: 1;
    height: 200px;
  }

  .pokemonSilhouette {
    z-index: 1;

    height: 125px;
  }

  .background {
    z-index: 0;
    border: 5px solid blue;
    border-radius: 25px;
    box-shadow: 0px 0px 30px #136ab3b8;
    height: 200px;
  }

  .background,
  .pokemonImage,
  .pokemonSilhouette {
    width: auto;
    position: absolute;
  }
`;
