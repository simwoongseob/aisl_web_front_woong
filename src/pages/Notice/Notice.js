import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Table, Pagination } from "antd";

import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./notice.module.css";
import { notice_columns } from "../../assets/string/notice_columns";
import { data_notice } from "../../assets/data/notice";

const Notice = () => {
  // 페이지 이동
  const navigate = useNavigate();

  // 페이지네이션
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div style={{ marginBottom: 100 }}>
      <PageTitle title="Notice" />

      <div className={styles.table_container}>
        {/* <Divider>notice</Divider> */}
        <Table
          columns={notice_columns}
          dataSource={data_notice}
          size="middle"
          rowClassName={styles.table_row}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigate("/notice/detail", { state: record });
              }, // click row
              onDoubleClick: (event) => {}, // double click row
              onContextMenu: (event) => {}, // right button click row
              onMouseEnter: (event) => {}, // mouse enter row
              onMouseLeave: (event) => {}, // mouse leave row
            };
          }}
          pagination={
            <Pagination current={current} onChange={onChange} total={15} />
          }
        />
      </div>
    </div>
  );
};

export default Notice;
