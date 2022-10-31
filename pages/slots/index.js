import React from "react";
import { Button } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import {
  CardBox,
  Container,
  SlotsBoxContainer,
} from "../../components/pageComponents/Slots/style";
import Helmet from "../../components/utils/Header/Helmet";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import {
  LargeContent,
  TopBar,
} from "../../components/pageComponents/PatientDetails/style";
import Slot from "./Slot";

const Slots = () => {
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
  const style1 = {
    backgroundColor: theme.palette.secondary.main,
    height:"10vh",
    width: "30%",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    marginTop: "2rem",
    alignSelf: "center",
    marginBottom: "1rem",
  };

  return (
    <Container>
      <Helmet />
      <SlotsBoxContainer>
        <TopBar>
          <LargeContent>Select your slots</LargeContent>
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
          <Slot />
        </CardBox>
      </SlotsBoxContainer>
      <Button variant="contained" style={style1}>
        Finish Sign In
      </Button>
    </Container>
  );
};

export default Slots;
