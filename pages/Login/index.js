import React from "react";
import LoginForm from "../../components/pageComponents/Login/LoginForm";
import { Container } from "../../components/pageComponents/Login/style";
import Logo from "../../components/utils/Images/Logo";

const Login = () => {
  return <Container>
    <Logo />
    <LoginForm />
  </Container>;
};

export default Login;
