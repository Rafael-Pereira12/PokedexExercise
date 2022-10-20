import styled from "styled-components";

export const _Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  height: 80px;
  width: 500px;
  color: black;
  background-color: white;
  text-transform: capitalize;
  justify-items: center;
  align-items: center;
  border-radius: 50px;
  font-family: "PokemonGame";
  font-size: 12px;
  box-shadow: 0px 0px 30px #8495a2;
  cursor: pointer;

  .pokemonImage {
    width: auto;
    height: 5rem;
  }

  .pokemonSilhouette {
    width: auto;
    height: 3rem;
  }

  h1 {
    font-size: 18px;
  }

  @media screen and (max-width: 540px) {
    height: 100px;
    width: 800px;
    h1 {
      font-size: 30px;
    }
  }
`;
