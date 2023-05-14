import React, { useState } from "react";
import VirtualList from "rc-virtual-list";
import styles from "./community.module.css";
import { MoreOutlined, LikeOutlined } from "@ant-design/icons";

import { Card, Space, Input, Button, Row, Col, List, Dropdown } from "antd";
import { data_community } from "../../assets/data/community";

// 섹션 높이 지정
const ContainerHeight = 400;

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
        글 수정
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
        글 삭제
      </a>
    ),
  },
];

const CommunityPost = (props) => {
  const [contents, setContents] = useState("");

  const [data, setData] = useState(data_community);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
    }
  };

  return (
    <div>
      <h1 className={styles.section_title}>Community</h1>
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
                <List.Item key={item.key} className={styles.post_container}>
                  <Row align={"middle"} justify={"space-between"}>
                    <Col>
                      <div>
                        <h4> {item.writer}</h4>
                        <p>{item.contents}</p>
                      </div>
                    </Col>
                    <Col>
                      <Dropdown
                        menu={{
                          items,
                        }}
                        placement="bottom"
                      >
                        <Button
                          className={styles.community_btn}
                          type="text"
                          icon={<MoreOutlined />}
                          style={{ textAlign: "center" }}
                        ></Button>
                      </Dropdown>
                    </Col>
                    {/* <h3 style={{}}>⦁ {item.contents}</h3> */}
                  </Row>
                  <Button
                    type="text"
                    icon={<LikeOutlined />}
                    className={styles.like_btn}
                    block={true}
                  >
                    100
                  </Button>
                </List.Item>
              )}
            </VirtualList>
            <Space.Compact style={{ width: "100%", marginTop: 30 }}>
              <Input placeholder="글을 작성해보세요." onChange={setContents} />
              <Button
                type="primary"
                style={{ backgroundColor: "#fcece7", color: "#2a3037" }}
              >
                작성
              </Button>
            </Space.Compact>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CommunityPost;
