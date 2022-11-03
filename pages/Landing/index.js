import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Doctor from "../../components/utils/Images/Doctor";
import Link from "next/link";
import { getAppointments } from "../../redux/actions/upcomingappointments.action";

const Landing = () => {
  const theme = useTheme();
  const name = useSelector((state) => state.login.user.name);
  const style = {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    height: "4rem",
    width: "90%",
  };
  const isSuccess = useSelector((state) => state.currentAppointment.success);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.login.user._id)
  const submitHandler = () => {
    dispatch(getAppointments({ id: id }));
  };

  useEffect(() => {
    if (isSuccess) window.location.reload();
  }, []);
  return (
    <Container>
      <ContentContainer>
        <Content>
          <LargeContent>Hi, {name}</LargeContent>
          <SmallContent>We hope you are doing good</SmallContent>
        </Content>
        <ButtonGroup>
          <Link href={"/qrcode"}>
            <Button variant="contained" style={style}>
              Start Appointment
            </Button>
          </Link>
          <Link href={"/upcomingappointments"}>
            <Button variant="contained" style={style} onClick={submitHandler}>
              Upcoming Appointments
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
