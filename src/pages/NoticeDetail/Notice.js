import React from "react";
import { useLocation } from "react-router-dom";
import { Divider, Table } from "antd";

import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./noticedetail.module.css";
import { notice_columns } from "../../assets/string/notice_columns";
import { data_notice } from "../../assets/data/notice";

const NoticeDetail = () => {
  // 공지사항 목록 페이지로부터 받은 데이터
  const location = useLocation();

  return (
    <div style={{ marginBottom: 100 }}>
      <PageTitle title="Notice Detail" />
      <p>{location.state.noticeid}</p>
      <p>{location.state.title}</p>
      <p>{location.state.writer}</p>
      <p>{location.state.createdAt}</p>
      <p>{location.state.views}</p>
    </div>
  );
};

export default NoticeDetail;
