import React from "react";
import { Button, Form, Input, ConfigProvider, Space, Select } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./join.module.css";
import { colors } from "../../assets/colors";
import { question } from "../../assets/string/question";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Join = () => {
  return (
    <div>
      <PageTitle title="Join" />
      <div className={styles.form_container}>
        <Form
          name="basic"
          colon={false}
          style={{
            minWidth: 500,
            maxWidth: 600,
          }}
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label={<span className={styles.label}>Name</span>}
            name="name"
            rules={[
              {
                // required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined style={{ marginRight: 5 }} />}
              placeholder="Please input your name"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label={<span className={styles.label}>Email</span>}
            name="email"
            rules={[
              {
                // required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ marginRight: 5 }} />}
              placeholder="Please input your email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label={<span className={styles.label}>Password</span>}
            name="password1"
            rules={[
              {
                // required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined style={{ marginRight: 5 }} />}
              type="password"
              placeholder="Please input your password"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label={<span className={styles.label}>Password Confirm</span>}
            name="password2"
            rules={[
              {
                // required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined style={{ marginRight: 5 }} />}
              type="password"
              placeholder="Please re-enter your password"
              size="large"
            />
          </Form.Item>

          {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
          <Form.Item
            label={
              <span className={styles.label}>
                Identity verification question
              </span>
            }
            name="question"
          >
            <Select
              defaultValue="가장 인상깊게 읽은 책은?"
              options={question}
              size="large"
            />
          </Form.Item>

          <Form.Item
            label={<span className={styles.label}>Answer</span>}
            name="answer"
          >
            <Input
              required={true}
              placeholder="Please input your answer to the identity verification question."
              size="large"
            />
          </Form.Item>
          <br />
          <br />
          <br />
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: colors.yiu_dark_blue_light,
                colorPrimaryHover: colors.yiu_dark_blue,
              },
            }}
          >
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block={true}
                size="large"
                style={{ height: 50 }}
              >
                JOIN
              </Button>
            </Form.Item>
          </ConfigProvider>
        </Form>
      </div>
    </div>
  );
};

export default Join;
