import { Button } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { currentAppointment } from "../../redux/actions/currentAppointment.action";
import { useRouter } from "next/router";

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
  const dispatch = useDispatch();
  const id = useSelector((state) => state.login.user._id);
  const success = useSelector((state) => state.currentAppointment.currentAppointment);
  const router = useRouter();

  useEffect(() => {
    function getCurrentAppointment() {
      dispatch(currentAppointment(id));
      if (success?.length > 0) router.push("/patientdetails");
    }
    getCurrentAppointment();
    const interval = setInterval(() => getCurrentAppointment(), 5000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Container>
      <Helmet />
      <QRBoxContainer>
        <QRBox borderColor={theme.palette.secondary.main}>
          <Link href={"/"}>
            <Button
              variant="contained"
              startIcon={<IoIosArrowBack />}
              style={style}
            >
              back
            </Button>
          </Link>
          <Content>Let the patient scan this QR </Content>
          <QR />
        </QRBox>
      </QRBoxContainer>
    </Container>
  );
};

export default QRCode;
