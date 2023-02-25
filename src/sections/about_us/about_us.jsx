import React from "react";
import styled from "styled-components";
import Button from "../../components/button";
import { white } from "../../const/colors";
import { ABOUT_US_TITLE } from "../../const/const";

const Section = styled.section`
  height: 50vh;
  background-color: ${white};
  display: flex;

  @media (max-width: 849px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5%;
    height: 80vh;
    padding: none !important;
  }
`;

const Article = styled.article`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

const ArticleOne = styled.article`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Arvo";
  font-weight: 900;
  font-size: 42px;
  text-align: left;
`;
const Text = styled.p`
  font-family: "Arvo";
  font-size: 15px;
  font-weight: 400;
  color: #787878;
  width: 400px;
`;

const About = () => {
  return (
    <Section>
      <ArticleOne>
        <br />
        <img
          style={{ width: "304px", height: "200px", borderRadius: "10px" }}
          src="https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.webp"
          alt=""
        />
      </ArticleOne>
      <Article>
        <Title>{ABOUT_US_TITLE}</Title>
        <br />
        <Text>
          We have written thousands of lines of code for different startups and
          agencies to make their products a reality or update them.
          <br />
          <br />
          stop wasting time or money, start working with us!
        </Text>
        <br />
        <Button />
      </Article>
    </Section>
  );
};

export default About;
