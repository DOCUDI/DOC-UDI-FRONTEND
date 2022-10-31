import { Avatar, Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Helmet from "../../components/utils/Header/Helmet";
import {
  CardHeader,
  CardName,
  Container,
  DetailsBox,
  LargeContent,
  SmallContent,
  SmallContentHeader,
  Span,
  TopBar,
} from "../../components/pageComponents/previousappointmentdetails/prevDetailsStyle";
import { doctorData } from "../../components/utils/data/doctorData";

const PreviousAppointmentDetails = () => {
  const theme = useTheme();
  const style = {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    fontSize: "1.2rem",
    fontWeight: "400",
    boxShadow: "none",
  };
  return (
    <Container>
      <Helmet />
      <TopBar>
        <LargeContent>Previous Appointment Details</LargeContent>
        <Link href={"/"}>
          <Button
            variant="contained"
            startIcon={<IoIosArrowBack />}
            style={style}
          >
            back
          </Button>
        </Link>
      </TopBar>

      <DetailsBox>
        <CardHeader>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ height: 80, width: 80 }}
          />
          <CardName>
            <SmallContentHeader>{doctorData.previousAppointments[0].patientName}</SmallContentHeader>
            <SmallContent>{doctorData.previousAppointments[0].age} y/o</SmallContent>
          </CardName>
        </CardHeader>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Date :</Span> {doctorData.previousAppointments[0].date}
        </SmallContent>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Time :</Span> {doctorData.previousAppointments[0].time}
        </SmallContent>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Symptoms :</Span>{" "}
          {doctorData.previousAppointments[0].symptoms}
        </SmallContent>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Prescriptions :</Span>{" "}
          {doctorData.previousAppointments[0].prescription}
        </SmallContent>
      </DetailsBox>
    </Container>
  );
};

export default PreviousAppointmentDetails;
