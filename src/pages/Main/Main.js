import React, { useState } from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import MainCarousel from "./Carousel";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div>
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <MainCarousel />
        <p>메인</p>
      </Container>
    </div>
  );
};

export default Main;
