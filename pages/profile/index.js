import React from "react";
import {
  BlueTile,
  BlueTile2,
  Container,
  ContentContainer,
  Help,
  HelperContainer,
  HelperContainer2,
  InnerPicContainer,
  MainContainer,
  MainContainer2,
  SmallContainer,
  SmallContent,
  WhiteTile,
  WhiteTile2,
} from "../../components/pageComponents/profile/style";
import { useTheme } from "@mui/material/styles";
import {
  TopBar,
  LargeContent,
} from "../../components/pageComponents/PatientDetails/style";
import Link from "next/link";
import { Button } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../components/utils/Images/Logo";
import Image from "next/image";
import { useSelector } from "react-redux";

const Profile = () => {
  const theme = useTheme();
  const style = {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    fontSize: "1.2rem",
    fontWeight: "400",
    boxShadow: "none",
  };
  const user = useSelector((state) => state.login.user);
  console.log(user);
  return (
    <Container>
      <Logo />
      <TopBar>
        <LargeContent>Your Profile</LargeContent>
        <Link href={"/"}>
          <Button
            variant="contained"
            startIcon={<IoIosArrowBack />}
            style={style}
          >
            back
          </Button>
        </Link>
      </TopBar>
      <ContentContainer>
        <InnerPicContainer>
          <Image
            src={
              "data:image/jpeg;base64,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"
            }
            alt="profile"
            objectFit="cover"
            height={"110%"}
            width={"110%"}
          />
        </InnerPicContainer>
        <SmallContainer>
          <LargeContent>{user.name}</LargeContent>
          <SmallContent>{user.specialization}</SmallContent>
        </SmallContainer>
      </ContentContainer>
      <Help>
        <MainContainer>
          <HelperContainer>
            <BlueTile>Email:</BlueTile>
            <WhiteTile>{user.email}</WhiteTile>
          </HelperContainer>
          <HelperContainer>
            <BlueTile>Clinic Address:</BlueTile>
            <WhiteTile>{user.clinic_address}</WhiteTile>
          </HelperContainer>
          <HelperContainer>
            <BlueTile>City:</BlueTile>
            <WhiteTile>{user.city}</WhiteTile>
          </HelperContainer>
          <HelperContainer>
            <BlueTile>Consultation Fees:</BlueTile>
            <WhiteTile>{user.consultation_fee}</WhiteTile>
          </HelperContainer>
        </MainContainer>
        <MainContainer2>
          <HelperContainer2>
            <BlueTile2>Time Slots</BlueTile2>
            {user.time_slots.map((slot) => (
              <WhiteTile2 key={slot.id}>
                {slot.startTime}&nbsp; - &nbsp;{slot.endTime}
              </WhiteTile2>
            ))}
          </HelperContainer2>
          <HelperContainer2>
            <BlueTile2>Working Days</BlueTile2>
            {user.working_days.length !== 0 &&
              user.working_days.map((slot) => (
                <WhiteTile2 key={slot.id}>
                  {slot.startTime}&nbsp; - &nbsp;{slot.endTime}
                </WhiteTile2>
              ))}
          </HelperContainer2>
        </MainContainer2>
      </Help>
    </Container>
  );
};

export default Profile;
