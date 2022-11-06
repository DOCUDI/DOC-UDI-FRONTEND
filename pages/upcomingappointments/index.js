import React from "react";
import {
  Container,
  PageContainer,
} from "../../components/pageComponents/confirmation/style";
import {
  LargeContent,
  TopBar,
  CardBox,
} from "../../components/pageComponents/PatientDetails/style";
import { useTheme } from "@mui/material/styles";
import Helmet from "../../components/utils/Header/Helmet";
import Button from "@mui/material/Button";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import PreviousPatientCard from "../../components/pageComponents/upcomingappointmentdetails/UpcomingPatientCard";
import { useSelector } from "react-redux";

const UpcomingAppointments = () => {
  const upcomingAppointments = useSelector(
    (state) => state.getAppointment.upAppointments
  );
  console.log(upcomingAppointments)
  const hasAppointment = upcomingAppointments?.length > 0 ? true : false;
  // console.log("up",upcomingAppointments)

  const theme = useTheme();
  const style = [
    {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "400",
      height: "4rem",
      width: "40%",
      marginTop: "3rem",
      alignSelf: "center",
    },
    {
      color: theme.palette.secondary.main,
      backgroundColor: "#fff",
      fontSize: "1.2rem",
      fontWeight: "400",
      boxShadow: "none",
    },
  ];
  return (
    <Container>
      <Helmet />
      <PageContainer>
        <TopBar>
          {hasAppointment ? (
            <LargeContent>Upcoming Appointments</LargeContent>
          ) : (
            <LargeContent>No Appointments</LargeContent>
          )}
          <Link href={"/"}>
            <Button
              variant="contained"
              startIcon={<IoIosArrowBack />}
              style={style[1]}
            >
              back
            </Button>
          </Link>
        </TopBar>

        {hasAppointment && (
          <CardBox>
            {upcomingAppointments?.map((item, index) => (
              <PreviousPatientCard
                id={item.id}
                key={index}
                patientName={item.patientName}
                date={item.date}
                time={item.time_slot}
                symptoms={item.symptoms}
                img={item.patientPfp}
              />
            ))}
          </CardBox>
        )}
      </PageContainer>
    </Container>
  );
};

export default UpcomingAppointments;
