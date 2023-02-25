import React from "react";
import styled from "styled-components";
import { white } from "../const/colors";
import { sections } from "../const/const";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`;

const Li = styled.li`
  font-family: "Anek Malayalam";
  color: ${white};
  cursor: pointer;
`;

const NavList = () => {
  return (
    <>
      <Ul>
        {sections.map((item) => {
          return <Li>{item}</Li>;
        })}
      </Ul>
    </>
  );
};

export default NavList;
