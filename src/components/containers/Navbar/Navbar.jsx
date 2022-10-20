import { _NavContainer } from "./_Navbar";
import { Link } from "react-router-dom";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { TbPokeball } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <_NavContainer>
        <Row>
          <section className="nav-container">
            <Col xs={1} s={1} md={1}>
              <div className="nav-logo">
                <Link to={"/"}>
                  <TbPokeball size={"3rem"} />
                </Link>
              </div>
            </Col>
            <Col xs={1} s={10}>
              <div className="nav-pokedex">
                <Link to={"/"}>Pokedex</Link>
              </div>
            </Col>
            <Col xs={1} s={8} md={1}>
              <div className="nav-favorites">
                <Link to={"/favorites"}>Favorites</Link>
              </div>
            </Col>
          </section>
        </Row>
      </_NavContainer>
    </>
  );
};

export default Navbar;
