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
import TickIcon from "../../components/utils/Images/TickIcon";
import Link from "next/link";
import { doctorData } from "../../components/utils/data/doctorData";
import PreviousPatientCard from "../../components/pageComponents/previousappointmentdetails/PreviousPatientCard";

const PreviousAppointment = () => {
  const theme = useTheme();
  const isConfirm = true;
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
      {isConfirm ? (
        <PageContainer>
          <TopBar>
            <LargeContent>Previous Appointment</LargeContent>
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

          <CardBox>
            {doctorData.previousAppointments.map((item, index) => (
              <PreviousPatientCard
                id={item.id}
                key={index}
                age={item.age}
                patientName={item.patientName}
                date={item.date}
                time={item.time}
                symptoms={item.symptoms}
                prescription={item.prescription}
              />
            ))}
          </CardBox>
        </PageContainer>
      ) : (
        <TickIcon />
      )}
    </Container>
  );
};

export default PreviousAppointment;
