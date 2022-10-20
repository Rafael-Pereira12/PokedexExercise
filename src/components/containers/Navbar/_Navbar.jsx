import styled from "styled-components";

export const _NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: red;
  width: auto;
  color: white;
  z-index: 2;
  height: 4rem;
  box-shadow: 0 10px 40px #33358b;

  .nav-container {
    display: flex;
    align-items: center;
    height: 4rem;
    font-weight: 600;
  }

  .nav-logo,
  .nav-pokedex,
  .nav-favorites {
    height: 3rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    border-right: 1px solid white;
  }

  .nav-pokedex :hover,
  .nav-favorites :hover {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
      0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
