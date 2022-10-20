import styled from "styled-components";

export const _PagesButton = styled.section`
  .nextArrow {
    transform: rotate(180deg);
  }

  .nextArrow,
  .prevArrow {
    cursor: pointer;
  }

  .nextArrow,
  .prevArrow,
  .nextArrowDisabled,
  .prevArrowDisabled {
    width: auto;
    height: 4rem;
  }

  .nextArrowDisabled,
  .prevArrowDisabled {
    opacity: 0.5;
  }
`;
