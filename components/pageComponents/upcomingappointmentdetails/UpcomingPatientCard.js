import React from "react";
import {
  Card,
  CardHeader,
  CardName,
  SmallContent,
  Span,
} from "../PatientDetails/style";
import { useTheme } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
// import Link from "next/link";

const PreviousPatientCard = (props) => {
  const theme = useTheme();
  const dt = new Date(props.date);
  const showSymptoms = props.symptoms.length > 0 ? true : false;
  return (
    <Card>
      <CardHeader>
        <Avatar
          alt="Remy Sharp"
          src={props?.img}
          sx={{ height: 80, width: 80 }}
        />
        <CardName>
          <SmallContent>{props.patientName}</SmallContent>
          {/* <SmallContent>
            {props.age} y/o
          </SmallContent> */}
        </CardName>
      </CardHeader>
      <SmallContent>
        <Span color={theme.palette.secondary.main}>Date :</Span> {dt.getDate()}/{dt.getMonth()}/{dt.getFullYear()}
      </SmallContent>
      <SmallContent>
        <Span color={theme.palette.secondary.main}>Time :</Span>{" "}
        {props.time.startTime} - {props.time.endTime}
      </SmallContent>
      {showSymptoms && <SmallContent>
        <Span color={theme.palette.secondary.main}>Symptoms :</Span>{" "}
        {props.symptoms}
      </SmallContent>}

      {/* <Link href={"/upcomingappointments/UpcomingAppointmentDetails"}>
        <Button variant="contained" style={style}>
          See Details
        </Button>
      </Link> */}
    </Card>
  );
};

export default PreviousPatientCard;
