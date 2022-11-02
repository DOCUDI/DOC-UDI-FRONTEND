import Link from "next/link";
import React from "react";
import { Container, TopBar, LargeContent, Button } from "../../components/pageComponents/profile/style";
import { IoIosArrowBack } from "react-icons/io";

const Profile = () => {
  return (
    <Container>
      <TopBar>
        <LargeContent>Previous Appointment Details</LargeContent>
        <Link href={"/patientdetails"}>
          <Button
            variant="contained"
            startIcon={<IoIosArrowBack />}
            style={style}
          >
            back
          </Button>
        </Link>
      </TopBar>
    </Container>
  );
};

export default Profile;
