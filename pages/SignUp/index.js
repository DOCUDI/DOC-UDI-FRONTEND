import React from "react";
import SignUpForm from "../../components/pageComponents/SignUp/SignUpForm";
import { Container } from "../../components/pageComponents/SignUp/style";
import Logo from "../../components/utils/Images/Logo";

const SignUp = () => {
  return <Container>
    <Logo />
    <SignUpForm />
  </Container>;
};

export default SignUp;
