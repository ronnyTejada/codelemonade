import React from "react";
import styled from "styled-components";
import ChooseLenguage from "../../components/chooseLenguage";
import NavList from "../../components/Nav";
import { LOGO } from "../../const/const";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Nav = styled(motion.div)`
  background-color: red;
  height: 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 50px;
  position: fixed; 
  width: 96%;


  @media (max-width: 658px) {
    &p{
      display: none;
    }
  }
  
`;

const Image = styled.img`
   width: 100px;
`

const Navbar = () => {
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "#000000"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 80]);
  return (
    <Nav
    id="navigation"
    style={{
      background,
      height
    }}
    
    >
      <Link to={'HOME'} spy={true} smooth={true} offset={50} duration={500}>
      <Image src={LOGO}/>

      </Link>

      <NavList /> 

      {/* <ChooseLenguage/> */}
    </Nav>
  );
};

export default Navbar;
