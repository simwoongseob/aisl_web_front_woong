import React from "react";
import { Button, Form, Input, ConfigProvider, Space, Select } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./login.module.css";
import { colors } from "../../assets/colors";
import { question } from "../../assets/string/question";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <div>
      <PageTitle title="Login" />
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
            name="password"
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
                LOGIN
              </Button>
            </Form.Item>
          </ConfigProvider>
        </Form>
      </div>
    </div>
  );
};

export default Login;
