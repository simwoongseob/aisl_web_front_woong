import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Slide from "react-reveal/Slide";
import { Container } from "reactstrap";

import MainCarousel from "./MainCarousel";
// import MainCarousel from "./Carousel";
import MainIntro from "./MainIntro";
import MainContent from "./MainContent";

import styles from "./main.module.css";

const Main = (props) => {
  const navigate = useNavigate();
  const { page } = props;
  return (
    <div>
      {console.log("props.page: ", page)}
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <MainCarousel />
        <MainIntro />
        <Slide bottom>
          <MainContent onClick={(page) => navigate(page)} />
        </Slide>
      </Container>
    </div>
  );
};

export default Main;
