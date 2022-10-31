import React from "react";
import Logo from "../../components/utils/Images/Logo";
import { Container } from "../../components/pageComponents/SignUp/style";
import ValidateAadhar from "./ValidateAadhar";

const index = () => {
  return (
    <Container>
      <Logo />
      <ValidateAadhar />
    </Container>
  );
};
export default index;
