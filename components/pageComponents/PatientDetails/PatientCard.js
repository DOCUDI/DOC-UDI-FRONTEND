import React from "react";
import {
  Card,
  CardHeader,
  CardName,
  SmallContent,
  SmallContentHeader,
  Span,
} from "./style";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const PreviousPatientCard = (props) => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    height: "3rem",
    width: "100%",
    marginTop: "1rem",
  };
  return (
    <Card>
      <CardHeader>
        <Avatar
          alt="Remy Sharp"
          src={props.docPfp}
          sx={{ height: 80, width: 80 }}
        />
        <CardName>
          <SmallContentHeader>Dr. {props.docName}</SmallContentHeader>
          <SmallContent>{props.specialization}</SmallContent>
          {/* <SmallContent>
            {props.clinicAddress}
          </SmallContent> */}
        </CardName>
      </CardHeader>
      <SmallContent>
        <Span color={theme.palette.secondary.main}>Date :</Span> {props.date}
      </SmallContent>
      <SmallContent>
        <Span color={theme.palette.secondary.main}>Time :</Span>{" "}
        {props.time.startTime}&nbsp;-&nbsp;{props.time.endTime}
      </SmallContent>
      {/* <SmallContent>
        <Span color={theme.palette.secondary.main}>Symptoms :</Span>{" "}
        {props.symptoms}
      </SmallContent> */}
      <SmallContent>
        <Span color={theme.palette.secondary.main}>Prescriptions :</Span>{" "}
        {props.prescription}
      </SmallContent>
      <Link
        href={{
          pathname: "/patientdetails/PatientDetail",
          query: {
            key: props.id
          },
        }}
      >
        <Button variant="contained" style={style}>
          See Details
        </Button>
      </Link>
    </Card>
  );
};

export default PreviousPatientCard;
