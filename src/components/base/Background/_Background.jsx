import styled from "styled-components";

export const _Background = styled.section`
  position: fixed;
  z-index: -1;
  width: 100%;

  img {
    width: 100%;
  }

  @media screen and (max-width: 912px) {
    img {
      width: 66rem;
    }
  }
`;
