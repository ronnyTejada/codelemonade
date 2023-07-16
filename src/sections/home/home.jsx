import React from "react";
import styled from "styled-components";
import { ImgEditor } from "../../assets/svg";
import Button from "../../components/button";
import { brown, pink, white } from "../../const/colors";
import Typewriter from "typewriter-effect";
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = styled(Element)`
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
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  @media (max-width: 506px) {
    font-size: clamp(3.0rem, 6vw, 4.5rem);

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
    display: none;
  }
`;

const Home = () => {
  return (
    <Header name="HOME">
      <Article>
       
        <Title>
          We help{" "}
          <span style={{ color: pink }}>
            <Typewriter
             options={{
              strings: ['Startups'],
              autoStart: true,
              loop: true,
            }}
              
            />
          </span>{" "}
          & <span style={{ color: pink }}> <Typewriter
             options={{
              strings: ['Entrepreneurs'],
              autoStart: true,
              loop: true,
            }}
              
            /></span> to write{" "}
          {"<code>"}{" "}
        </Title>
        <Button />
      </Article>

      <Article2>
        <ImgEditor />
      </Article2>
    </Header>
  );
};

export default Home;
