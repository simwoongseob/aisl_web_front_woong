import React from "react";
import { Row, Col } from "antd";
import styles from "./community.module.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import CommunityCalendar from "./Calendar";
import CommunityPlan from "./Plan";
import CommunityPost from "./Post";

const Community = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <PageTitle title="Community" />
      <h2 className={styles.page_date}>2023-05-13</h2>

      <Row style={{ marginLeft: 50, marginRight: 50 }}>
        {/* 왼쪽 - 달력 */}
        <Col span={12}>
          <CommunityCalendar />
        </Col>

        {/* 왼쪽-오른쪽 사이 중간 여백 */}
        <Col span={2}></Col>

        {/* 오른쪽 섹션1 - 주요일정 */}
        <Col span={10}>
          <CommunityPlan />

          {/* 오른쪽 섹션 사이의 중간 여백 */}
          <br />
          <br />
          {/* 오른쪽 섹션2 - 커뮤니티 */}
          <CommunityPost />
        </Col>
      </Row>
    </div>
  );
};

export default Community;
