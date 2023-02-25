import React from "react";
import styled from "styled-components";
import { ImgEditor } from "../../assets/svg";
import Button from "../../components/button";
import { brown, pink, white } from "../../const/colors";

const Header = styled.header`
  height: 100vh;
  background-color: ${brown};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 849px) {
    flex-direction: column;
    padding-bottom: 15%;
    padding-top: 15%;
    text-align: center;
    gap: 5%;
  }
`;

export const Title = styled.h1`
  font-family: "Arvo", serif;
  color: ${white};
  font-weight: 800;
  font-size: 70px;

  @media (max-width: 510px) {
    font-size: 40px;
  }
`;

const Article = styled.article`
  width: 520px;
  height: auto;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

const Article2 = styled.article`
  width: 50%;
  @media (max-width: 849px) {
    width: 80%;
  }
  @media (max-width: 510px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Header>
      <Article>
        <Title>
          We help <span style={{ color: pink }}>Startups</span> &{" "}
          <span style={{ color: pink }}>Entrepreneurs</span> to write {"<code>"}{" "}
        </Title>
        <Button/>
      </Article>

      
     
     <Article2>
     <ImgEditor/>
     </Article2>
     
    </Header>
  );
};

export default Home;
