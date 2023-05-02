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
import CarouselComponent from "./Carousel";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <CarouselComponent />
      </div>
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <Row>
          <Col sm="4">
            <Card body>
              <CardTitle>앨범</CardTitle>
              <div style={{ minHeight: 200 }}></div>
              {/* <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button> */}
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>공지사항</CardTitle>
              <div style={{ minHeight: 200 }}></div>
              {/* <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button> */}
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>달력</CardTitle>
              <div style={{ minHeight: 200 }}></div>
              {/* <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
