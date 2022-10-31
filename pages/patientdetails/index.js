/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  CardBox,
  Container,
  DetailsBox,
  HeaderBox,
  LargeContent,
  PatientHistoryBox,
  SmallContent,
  Span,
  TextBox,
  TopBar,
} from "../../components/pageComponents/PatientDetails/style";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Helmet from "../../components/utils/Header/Helmet";
import { patientData } from "../../components/utils/data/patientData";
import PatientCard from "../../components/pageComponents/PatientDetails/PatientCard";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const style = [
    {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "400",
      height: "4rem",
      width: "40%",
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
      <DetailsBox>
        <HeaderBox>
          <TopBar>
            <LargeContent>Patient's Details</LargeContent>
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
          <Avatar
            alt="Remy Sharp"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.collinsdictionary.com%2Fdictionary%2Fenglish%2Fsolo&psig=AOvVaw3aryi0YTqJq1rS3prXAvP6&ust=1664386287894000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjVw6PAtfoCFQAAAAAdAAAAABAD"
            sx={{ height: 100, width: 100, marginBottom: "1rem" }}
          />
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Name :</Span>{" "}
            {patientData.name}
          </SmallContent>
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Age :</Span>{" "}
            {patientData.age}
          </SmallContent>
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Symptoms :</Span>{" "}
          </SmallContent>
          <SmallContent>&nbsp;&nbsp;&nbsp;{patientData.symptoms}</SmallContent>
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Prescription :</Span>{" "}
          </SmallContent>
          <TextBox
            placeholder="Write Prescription"
            color={theme.palette.secondary.main}
          ></TextBox>
          <Link href={"/confirmation"}>
            <Button variant="contained" style={style[0]}>
              Upload Prescription
            </Button>
          </Link>
        </HeaderBox>
      </DetailsBox>
      <PatientHistoryBox>
        <LargeContent>Patient's Medical History : </LargeContent>
        <CardBox>
          {patientData.history.map((item, index) => (
            <PatientCard
              key={index}
              doctorName={item.doctorName}
              doctorSpecialization={item.doctorSpecialization}
              doctorAddress={item.doctorAddress}
              date={item.date}
              time={item.time}
              symptoms={item.symptoms}
              prescription={item.prescription}
            />
          ))}
        </CardBox>
      </PatientHistoryBox>
    </Container>
  );
};

export default index;
