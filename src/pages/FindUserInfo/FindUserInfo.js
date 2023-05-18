import React from "react";
import { Row, Col } from "antd";
import styles from "./findUserInfo.module.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import FindUserInfoEmail from "./ForgotEmail";
import FindUserInfoPassword from "./ForgotPassword";

const FindUserInfo = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <PageTitle title="FindUserInfo" />
      <h2 className={styles.page_date}>2023-05-13</h2>

      <Row style={{ marginLeft: 50, marginRight: 50 }}>
        {/* 왼쪽 - 이메일 찾기 */}
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <FindUserInfoEmail />
        </Col>

        {/* 왼쪽-오른쪽 사이 중간 여백 */}
        <Col span={2}></Col>

        {/* 오른쪽 섹션1 - 주요일정 */}
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <FindUserInfoPassword />
        </Col>
      </Row>
    </div>
  );
};

export default FindUserInfo;
