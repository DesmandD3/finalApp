import Next from "next";
import React from "react";
import styled from "styled-components";
import Logo from "../logo";
import Burger from "./burger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 3;

`;

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Burger />
    </Nav>
  );
};

export default Navbar;
