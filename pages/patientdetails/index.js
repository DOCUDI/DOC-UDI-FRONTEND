/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
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
// import { patientData } from "../../components/utils/data/patientData";
// import { uploadPrescription } from "../../redux/actions/uploadprescription.action";
import PatientCard from "../../components/pageComponents/PatientDetails/PatientCard";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useSelector } from "react-redux";

const index = () => {
  const theme = useTheme();
  const data = useSelector(
    (state) => state.currentAppointment.currentAppointment[0]
  );
  const history = useSelector(
    (state) => state.currentAppointment.medicalHistory
  );
  // const docData = useSelector((state) => state.login.user);

  const hasSymptoms = data?.symptoms.length > 0 ? true : false;
  const hasHistory = history?.length > 0 ? true : false;

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

  const [text, setText] = useState("");
  // const dispatch = useDispatch();
  // const submitHandler = () => {
  //   const res = {
  //     docID: docData._id,
  //     patientID: data.patientID,
  //     docName: docData.name,
  //     specialization: docData.specialization,
  //     clinicAddress: docData.clinic_address,
  //     patientName: data.patientName,
  //     date: data.date,
  //     time: data.time_slot,
  //     fees: docData.consultation_fee,
  //     prescription: text,
  //   };
  //   dispatch(uploadPrescription(res));
  // };

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
            {data?.patientName}
          </SmallContent>
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Slot :</Span>{" "}
            {data?.time_slot.startTime}&nbsp;-&nbsp;{data?.time_slot.endTime}
          </SmallContent>
          {/* <SmallContent>
            <Span color={theme.palette.secondary.main}>Age :</Span>{" "}
            {}
          </SmallContent> */}
          {hasSymptoms && (
            <>
              <SmallContent>
                <Span color={theme.palette.secondary.main}>Symptoms :</Span>{" "}
              </SmallContent>
              <SmallContent>&nbsp;&nbsp;&nbsp;{data?.symptoms}</SmallContent>
            </>
          )}
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Prescription :</Span>{" "}
          </SmallContent>
          <TextBox
            placeholder="Write Prescription"
            color={theme.palette.secondary.main}
            onChange={(newValue) => setText(newValue.target.value)}
            value={text}
          ></TextBox>
          <Link
            href={{
              pathname: "/confirmation",
              query: { data: JSON.stringify(text) },
            }}
          >
            <Button
              variant="contained"
              style={style[0]}
            >
              Upload Prescription
            </Button>
          </Link>
        </HeaderBox>
      </DetailsBox>
      {hasHistory && (
        <PatientHistoryBox>
          <LargeContent>Patient's Medical History : </LargeContent>
          <CardBox>
            {history?.map((item, index) => (
              <PatientCard
                key={index}
                docName={item.docName}
                specialization={item.specialization}
                clinicAddress={item.clinicAddress}
                date={item.date}
                time={item.time}
                symptoms={item.symptoms}
                prescription={item.prescription}
              />
            ))}
          </CardBox>
        </PatientHistoryBox>
      )}
    </Container>
  );
};

export default index;
