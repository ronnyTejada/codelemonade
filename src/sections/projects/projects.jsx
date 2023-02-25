import React from "react";
import styled from "styled-components";
import { light_gray } from "../../const/colors";
import arktrac from "../../assets/imgs/arktrac.png";

const Section = styled.section`
  height: 100vh;
  background-color: ${light_gray};
  display: flex;
  flex-direction: row;
  padding-left: 83px;
  align-items: center;
  @media (max-width: 849px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5%;
    height: 100%;
    padding-bottom: 5%;
    padding-top: 5%;
  }
`;

const ArticleOne = styled.article`
  width: 50%;
  @media (max-width: 849px) {
    width: 100%;
  }
`;

const ArticleTwo = styled.article`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Arvo";
  font-weight: 400;
  font-size: 32px;
`;

const Text = styled.p`
  font-family: "Arvo";
  font-weight: 400;
  font-family: 16px;
  color: #5f5f5f;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Projects = () => {
  return (
    <Section>
      <ArticleOne>
        <Title>Ark Trac</Title>
        <br />
        <Text>
          Mobile application for tracking transports in which I contribute much
          of the development in both frontend and backend
        </Text>
        <br />
        <Text>Vuejs MongoDB Nodejs</Text>
      </ArticleOne>
      <ArticleTwo>
        <div style={{ width: "320px", height: "550px", borderRadius: "10px" }}>
          <Img src={arktrac} alt="" />
        </div>
      </ArticleTwo>
    </Section>
  );
};

export default Projects;
