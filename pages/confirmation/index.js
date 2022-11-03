import React, { useState } from "react";
// import { LinkProps } from "next/link";
import {
  Container,
  PageContainer,
} from "../../components/pageComponents/confirmation/style";
import {
  LargeContent,
  TopBar,
  SmallContent,
  Span,
} from "../../components/pageComponents/PatientDetails/style";
import { useTheme } from "@mui/material/styles";
import Helmet from "../../components/utils/Header/Helmet";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { IoIosArrowBack } from "react-icons/io";
import { patientData } from "../../components/utils/data/patientData";
import TickIcon from "../../components/utils/Images/TickIcon";
import { uploadPrescription } from "../../redux/actions/uploadprescription.action";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const Confirmation = () => {
  const theme = useTheme();
  const [isConfirm, setIsConfirm] = useState(false);
  const router = useRouter();
  const text = router.query.data;
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

  const data = useSelector(
    (state) => state.currentAppointment.currentAppointment[0]
  );
  const docData = useSelector((state) => state.login.user);

  const dispatch = useDispatch();

  const handler = () => {
    const res = {
      docID: docData?._id,
      patientID: data?.patientID,
      docName: docData?.name,
      specialization: docData?.specialization,
      clinicAddress: docData?.clinic_address,
      patientName: data?.patientName,
      date: data?.date,
      time: data?.time_slot,
      fees: docData?.consultation_fee,
      prescription: text,
    };
    setIsConfirm((isConfirm) => !isConfirm);
    dispatch(uploadPrescription(res));
  };

  if (isConfirm) {
    setTimeout(function () {
      window.location.href = "/";
    }, 5000);
  }

  return (
    <Container>
      {!isConfirm ? (
        <>
          <Helmet />
          <PageContainer>
            <TopBar>
              <LargeContent>Confirmation Page</LargeContent>
              <Link href={"/patientdetails"}>
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
              src="/static/images/avatar/2.jpg"
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
            <SmallContent>
              &nbsp;&nbsp;&nbsp;{patientData.symptoms}
            </SmallContent>
            <SmallContent>
              <Span color={theme.palette.secondary.main}>Prescription :</Span>{" "}
              {text}
            </SmallContent>
            {/* <Link href={"/"}> */}
            <Button variant="contained" style={style[0]} onClick={handler}>
              Confirm
            </Button>
            {/* </Link> */}
          </PageContainer>
        </>
      ) : (
        <TickIcon />
      )}
    </Container>
  );
};

export default Confirmation;
