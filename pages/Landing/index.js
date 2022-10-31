import React from "react";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  Container,
  Content,
  ContentContainer,
  ImageContainer,
  LargeContent,
  SmallContent,
} from "../../components/pageComponents/Landing/style";
import { useTheme } from "@mui/material/styles";
import Doctor from "../../components/utils/Images/Doctor";
import Link from "next/link";

const Landing = () => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    height: "4rem",
    width: "90%",
  };
  return (
    <Container>
      <ContentContainer>
        <Content>
          <LargeContent>Hi, Paarth Jain</LargeContent>
          <SmallContent>We hope you are doing good</SmallContent>
        </Content>
        <ButtonGroup>
          <Link href={"/qrcode"}>
            <Button variant="contained" style={style}>
              Start Appointment
            </Button>
          </Link>
          <Link href={"/previousappointment"}>
            <Button variant="contained" style={style}>
              Previous Appointments
            </Button>
          </Link>
        </ButtonGroup>
      </ContentContainer>
      <ImageContainer>
        <Doctor />
      </ImageContainer>
    </Container>
  );
};

export default Landing;
