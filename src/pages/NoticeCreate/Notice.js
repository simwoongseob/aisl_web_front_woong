import React from "react";
import { Divider, Table } from "antd";

import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./noticecreate.module.css";
import { notice_columns } from "../../assets/string/notice_columns";
import { data_notice } from "../../assets/data/notice";

const NoticeCreate = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <PageTitle title="Notice Create" />
    </div>
  );
};

export default NoticeCreate;
