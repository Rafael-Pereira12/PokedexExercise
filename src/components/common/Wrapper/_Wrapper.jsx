import styled from "styled-components";

export const _Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 2fr;
  justify-items: center;
  align-items: center;
  grid-row-gap: 10px;
  text-decoration: none;
  margin-bottom: 2rem;
  height: 80rem;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    height: 190rem;
  }
`;
