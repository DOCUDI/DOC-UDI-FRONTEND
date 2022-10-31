import React from "react";
import { Button, Container, FormControl, OutlinedInput } from "@mui/material";
import {
  ButtonsContainer,
  Helper,
  HelperInner,
  LargeText,
  SmallText,
} from "./style";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUpForm = () => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    width: "100%",
    marginTop: "2rem",
    alignSelf: "center",
    marginBottom: "1rem",
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid #5893FF",
        height: "85vh",
        width: "35vw",
        borderRadius: "0.5rem",
      }}
    >
      <SmallText>Welcome to UNI DOC</SmallText>
      <LargeText>Create your account</LargeText>

      <FormControl
        sx={{
          height: "fit-content",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Helper>
          <label>Full Name</label>
          <OutlinedInput
            placeholder="Enter your name"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
          />
        </Helper>
        <Helper>
          <label>E-mail</label>
          <OutlinedInput
            placeholder="Enter your email"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
          />
        </Helper>
        <Helper>
          <label>Password</label>
          <OutlinedInput
            placeholder="Enter your password"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
          />
        </Helper>
        <Helper>
          <label>Confirm Password</label>
          <OutlinedInput
            placeholder="Confirm password"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
          />
        </Helper>
        <Helper>
          <label>Phone Number</label>
          <HelperInner>
            <OutlinedInput
              placeholder="+91"
              sx={{
                border: "1px solid #5993ff",
                width: "15%",
                height: "6vh",
                marginRight: "0.5rem",
              }}
            />
            <OutlinedInput
              placeholder="Enter your phone number"
              sx={{ border: "1px solid #5993ff", width: "85%", height: "6vh" }}
            />
          </HelperInner>
        </Helper>
        <Button variant="contained" style={style}>
          Sign In
        </Button>
        <HelperInner>
          <Divider
            sx={{
              width: "45%",
            }}
          />
          &nbsp;&nbsp;OR&nbsp;&nbsp;
          <Divider
            sx={{
              width: "45%",
            }}
          />
        </HelperInner>
        <ButtonsContainer>
          <Button
            variant="outlined"
            startIcon={<FcGoogle />}
            sx={{
              border: "1px solid #5893FF",
              color: "#5893FF",
            }}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FaFacebook color="#1877f2" />}
            sx={{
              border: "1px solid #5893FF",
              color: "#5893FF",
            }}
          >
            Facebook
          </Button>
        </ButtonsContainer>
      </FormControl>
    </Container>
  );
};

export default SignUpForm;
