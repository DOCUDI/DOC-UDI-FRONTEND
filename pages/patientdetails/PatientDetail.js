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
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PatientDetail = () => {
  const theme = useTheme();
  const style = {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    fontSize: "1.2rem",
    fontWeight: "400",
    boxShadow: "none",
  };  
  const router = useRouter()
  // console.log("query",router.query);
  const history = useSelector(
    (state) => state.currentAppointment.medicalHistory
  );
  const data = history.find(his => his._id == router.query.key);
  console.log("data",data);
  return (
    <Container>
      <Helmet />
      <TopBar>
        <LargeContent>Previous Appointment Details</LargeContent>
        <Link href={"/patientdetails"}>
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
            src={data.docPfp}
            sx={{ height: 80, width: 80 }}
          />
          <CardName>
            <SmallContentHeader>
              {data.docName}
            </SmallContentHeader>
            <SmallContent>{data.specialization}</SmallContent>
            <SmallContent>{data.clinicAddress}</SmallContent>
          </CardName>
        </CardHeader>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Date :</Span>{" "}
          {data.date}
        </SmallContent>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Time :</Span>{" "}
          {data.time.startTime}&nbsp; - &nbsp;{data.time.endTime}
        </SmallContent>
        <SmallContent>
          <Span color={theme.palette.secondary.main}>Prescriptions :</Span>{" "}
          {data.prescription}
        </SmallContent>
      </DetailsBox>
    </Container>
  );
};

export default PatientDetail;
