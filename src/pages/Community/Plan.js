import React, { useEffect, useState } from "react";
import VirtualList from "rc-virtual-list";
import styles from "./community.module.css";
import { data_plan } from "../../assets/data/plan";

import { Card, Row, Col, Button, List, Dropdown, Space } from "antd";
import { PlusOutlined, MenuOutlined } from "@ant-design/icons";

// 섹션 높이 지정
const ContainerHeight = 300;

// 일정 편집 버튼(수정, 삭제)
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        일정 수정
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        일정 삭제
      </a>
    ),
  },
];

const CommunityPlan = (props) => {
  const [data, setData] = useState(data_plan);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
    }
  };

  return (
    <div>
      {/* 섹션 타이틀 */}
      <Row align={"middle"}>
        <Col span={8}>
          <h1 className={styles.section_title}>Plan</h1>
        </Col>
        <Col span={7} offset={9}>
          <Button
            color="#868e96"
            icon={<PlusOutlined />}
            onClick={props.plusPlan}
            onScroll={onScroll}
          />
        </Col>
      </Row>

      <Row>
        <Col span={19}>
          <Card>
            <VirtualList
              data={data}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="key"
            >
              {(item) => (
                <List.Item key={item.key}>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottom"
                  >
                    <Button type="text" className={styles.plan_item}>
                      <b>{item.contents}</b>
                    </Button>
                  </Dropdown>
                  {/* <h3 style={{}}>⦁ {item.contents}</h3> */}
                </List.Item>
              )}
            </VirtualList>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CommunityPlan;
