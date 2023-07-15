import React,{useState} from "react";
import styled from "styled-components";
import { pink, white } from "../const/colors";
import { sections } from "../const/const";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`;

const Li = styled(Link)`
  font-family: "Anek Malayalam";
  font-weight: 800;
  color: ${props=>props.selected?pink:white};
  cursor: pointer;
`;

const NavList = () => {
  const [selected,setSelected]=useState('')
  return (
    <>
      <Ul>
        {sections.map((item) => {
          return <Li to={item} spy={true} smooth={true} offset={-50} duration={1000} onClick={()=>setSelected(item)} selected={selected===item?true:false}>{item}</Li>;
        })}
      </Ul>
    </>
  );
};

export default NavList;
