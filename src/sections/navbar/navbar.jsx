import React from "react";
import styled from "styled-components";
import ChooseLenguage from "../../components/chooseLenguage";
import NavList from "../../components/Nav";
const Nav = styled.nav`
  background-color: black;
  height: 93px;
  display: flex;
  justify-content: space-around;
  align-items: center;


  @media (max-width: 658px) {
    &p{
      display: none;
    }
  }
  
`;

const Navbar = () => {
  return (
    <Nav>
      <p style={{ color: "green" }}>{"{CODELOMONADE};"}</p>

      {/* <NavList />  */}

      {/* {/* <ChooseLenguage/> */}
    </Nav>
  );
};

export default Navbar;
