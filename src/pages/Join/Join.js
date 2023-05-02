import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <Container style={{ marginTop: 50, marginBottom: 50 }}>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">아이디</Label>
          <Input type="id" name="id" id="id" placeholder="아이디 입력" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">이메일</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="이메일 입력"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">비밀번호</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="비밀번호 입력"
          />
        </FormGroup>
        <Link to={"/"}>
          <Button color="primary" size="lg" block>
            회원가입
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Join;
