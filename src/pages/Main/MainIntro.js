import React from "react";
import Fade from "react-reveal/Fade";

const MainIntro = () => (
  <div
    style={{
      textAlign: "center",
      marginTop: 100,
      marginBottom: 150,
      marginLeft: 100,
      marginRight: 100,
    }}
  >
    <Fade top>
      <h1>AI SERVICE LAB</h1>
    </Fade>
    <Fade bottom>
      <h3>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
        <br />
        무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
        <br />
        남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세
        <br />
        무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세
      </h3>
    </Fade>
  </div>
);
export default MainIntro;
