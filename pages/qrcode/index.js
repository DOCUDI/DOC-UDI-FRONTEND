import { Button } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  Container,
  Content,
  QRBox,
  QRBoxContainer,
} from "../../components/pageComponents/QRCode/style";
import Helmet from "../../components/utils/Header/Helmet";
import QR from "../../components/utils/Images/QR";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const QRCode = () => {
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "1rem",
    left: "0",
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    color: theme.palette.secondary.main,
  };

  return (
    <Container>
      <Helmet />
      <QRBoxContainer>
        <QRBox borderColor={theme.palette.secondary.main}>
          <Link href={'/'}>
            <Button
              variant="contained"
              startIcon={<IoIosArrowBack />}
              style={style}
            >
              back
            </Button>
          </Link>
          <Content>Let the patient scan this QR</Content>
          <QR />
        </QRBox>
      </QRBoxContainer>
    </Container>
  );
};

export default QRCode;
