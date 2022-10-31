import React, { useState } from "react";
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
import Link from "next/link";

const Confirmation = () => {
  const theme = useTheme();
  const [isConfirm, setIsConfirm] = useState(true);
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
          <SmallContent>&nbsp;&nbsp;&nbsp;{patientData.symptoms}</SmallContent>
          <SmallContent>
            <Span color={theme.palette.secondary.main}>Prescription :</Span>{" "}
            {patientData.prescription}
          </SmallContent>
          <Button variant="contained" style={style[0]} onClick={() => setIsConfirm(!isConfirm)} >
            Confirm
          </Button>
        </PageContainer>
      ) : (
        <TickIcon />
      )}
    </Container>
  );
};

export default Confirmation;
