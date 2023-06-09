import { GET_MAIN, JOIN, LOGIN } from "../types";

import axios from "axios";

// 메인 데이터 가져오기
export function getMain() {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_GET_MAIN,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("메인 데이터 에러", err);
      return false;
    });

  return {
    type: GET_MAIN,
    payload: request,
  };
}

// 회원가입
export function join(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_JOIN,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      name: data.name,
      email: data.email,
      pwd: data.pwd,
      question: data.question,
      answer: data.answer,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("회원가입 에러", err);
      return false;
    });

  return {
    type: JOIN,
    payload: request,
  };
}

// 로그인
export function login(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_LOGIN,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: data.email,
      pwd: data.pwd,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("로그인 에러", err);
      return false;
    });

  return {
    type: LOGIN,
    payload: request,
  };
}
