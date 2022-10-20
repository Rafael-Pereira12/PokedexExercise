import styled from "styled-components";

export const _Background = styled.section`
  position: absolute;
  z-index: -1;

  img {
    width: 99vw;
  }

  @media screen and (max-width: 912px) {
    img {
      width: 66rem;
    }
  }
`;
