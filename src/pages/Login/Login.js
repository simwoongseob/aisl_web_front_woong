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

const Login = () => {
  return (
    <Container style={{ marginTop: 50, marginBottom: 50 }}>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">ID</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter ID"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Password"
          />
        </FormGroup>
        <Link to={"/"}>
          <Button color="primary" size="lg" block>
            로그인
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
