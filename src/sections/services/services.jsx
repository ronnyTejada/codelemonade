import React from "react";
import styled from "styled-components";
import Button from "../../components/button";
import List from "../../components/listServices";
import { brown, pink, white } from "../../const/colors";

const Section = styled.section`
  height: 100vh;
  background-color: ${brown};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 678px) {
   
    justify-content: center;
    align-content:center;
    gap: 5%;
    height: 100%;
  }
  
`;
const ArticleOne = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 53px;
`;

const ArticleTwo = styled.article`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Arvo", serif;
  color: ${white};
  font-weight: 800;
  font-size: 60px;

  @media (max-width: 849px) {
   font-size: 40px;
  }

  @media (max-width: 510px) {
    font-size: 40px;
  }
`;

const Text = styled.p`
  font-family: "Arvo";
  font-size: 20px;
  font-weight: 400;
  color: #b6b6b6;
  width: 400px;
`;

const Services = () => {
  return (
    <Section>
      <ArticleOne>
        <Title>
          Our Services <br />
          <span style={{ color: pink }}>Software Development</span>
        </Title>
        <Text>
          We only write code. We focus on one area of digital product creation,
          this allows us to specialize and offer a better service
        </Text>
        <br />
        <Button />
      </ArticleOne>

      <ArticleTwo>
        <List />
      </ArticleTwo>
    </Section>
  );
};

export default Services;
