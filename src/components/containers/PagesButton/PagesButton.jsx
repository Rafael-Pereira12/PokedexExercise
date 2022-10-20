import Arrow from "../../../images/arrow.png";
import { _PagesButton } from "./_PagesButton";
import React from "react";

const PagesButton = ({ direction, pagesCallback }) => {
  return (
    <_PagesButton onClick={pagesCallback}>
      <img className={direction} src={Arrow} alt="pagesButton" />
    </_PagesButton>
  );
};

export default PagesButton;
