import {
  GET_NOTICE,
  CREATE_NOTICE,
  UPDATE_NOTICE,
  DELETE_NOTICE,
} from "../types";

import axios from "axios";

// 공지사항 가져오기
export function getNotice() {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_GET_NOTICE,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {},
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("공지사항 에러", err);
      return false;
    });

  return {
    type: GET_NOTICE,
    payload: request,
  };
}

// 공지사항 생성
// multi form data 형식으로 변경해야함!!!!!!!!!!!!
export function createNotice(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_CREATE_NOTICE,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      title: data.title,
      contents: data.contents,
      img: data.img,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("공지사항 생성 에러", err);
      return false;
    });

  return {
    type: CREATE_NOTICE,
    payload: request,
  };
}

// 공지사항 수정
// multi form data 형식으로 변경해야함!!!!!!!!!!!!
export function updateNotice(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_UPDATE_NOTICE,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      noticeid: data.noticeid,
      title: data.title,
      contents: data.contents,
      img: data.img,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("공지사항 수정 에러", err);
      return false;
    });

  return {
    type: UPDATE_NOTICE,
    payload: request,
  };
}

// 공지사항 삭제
export function deleteNotice(data) {
  const request = axios({
    method: "POST",
    url: process.env.REACT_APP_DELETE_NOTICE,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      noticeid: data.noticeid,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("공지사항 삭제 에러", err);
      return false;
    });

  return {
    type: DELETE_NOTICE,
    payload: request,
  };
}
