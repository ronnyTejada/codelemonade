import React from "react";
import styled from "styled-components";
import { CircleGreen, CircleRed } from "../assets/svg";
import { services } from "../const/const";

const Li = styled.li`
  font-family: "Arvo";
  font-weight: 400px;
  font-size: 20px;
  color: #b6b6b6;
  line-height: 2;
  list-style: circle;
  list-style: none;
`;
const Ul = styled.ul`
  @media (max-width: 678px) {
    display: none;
  }
`;
const List = () => {
  return (
    <Ul>
      {services.map((item) => {
        return (
          <Li>
            {item.status ? <CircleGreen /> : <CircleRed />} {item.title}
          </Li>
        );
      })}
    </Ul>
  );
};

export default List;
