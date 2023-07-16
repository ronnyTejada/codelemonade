import React, { useState } from "react";
import styled from "styled-components";
import { light_gray } from "../../const/colors";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../const/const";
import { useEffect } from "react";
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Section = styled(Element)`
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

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Arvo";
  border-bottom: 1px solid lightgray;
  margin-bottom: 5px;
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
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  const handleNext = () => {
    if (num === projects.length - 1) {
      setNum((prev) => 0);
      return;
    }
    setNum((prev) => (prev = prev + 1));
    setShow((prev) => (prev = !prev));
  };



  return (
    <>
      <Section name="PROJECTS">
        <ArticleOne>
          <AnimatePresence mode="wait">
            <motion.div
              key={show}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Title>{projects[num].title}</Title>
              <br />
              <Text>{projects[num].description}</Text>
              <br />
              {projects[num].tools.map((item) => {
                return <Text>{item}</Text>;
              })}
            </motion.div>
          </AnimatePresence>
        </ArticleOne>

        {/* <ArticleTwo>
          <AnimatePresence mode="wait">
            <motion.div
              key={show}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                style={{
                  width: "320px",
                  height: "550px",
                  borderRadius: "10px",
                }}
              >
                <Img src={projects[num].img} alt="" />
              </div>
            </motion.div>
          </AnimatePresence>
        </ArticleTwo> */}
      </Section>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleNext} style={{ marginRight: 10 }}>
          Change Project
        </Button>
      </div>
    </>
  );
};

export default Projects;
