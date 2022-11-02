/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
// import { useSession, signIn } from "next-auth/react";
import { useSelector } from "react-redux";
import { Button, Container, FormControl, OutlinedInput } from "@mui/material";
import {
  // ButtonsContainer,
  Helper,
  // HelperInner,
  LargeText,
  SmallText,
} from "./style";
import { useTheme } from "@mui/material/styles";
// import { Divider } from "@mui/material";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
import { login } from "../../../redux/actions/login.action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginForm = () => {
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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginEmail = useSelector((state) => state.signup.email); // for google auth
  const loginPassword = useSelector((state) => state.signup.usedPassword); // for google auth

  console.log(loginEmail, loginPassword)

  const dispatch = useDispatch();
  const router = useRouter();
  // const { data: session } = useSession();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data));
    router.push("/");
  };
  // console.log(session)

  // if (session && session.user.email === loginEmail) {
  //   const data = {
  //     email: session.user.email,
  //     loginPassword,
  //   };
  //   dispatch(login(data));
  //   // router.push("/");
  // }
  // else if(session && session.user.email !== loginEmail) {
  //   router.push("/Login");
  // }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid #5893FF",
        height: "fit-content",
        width: "35vw",
        borderRadius: "0.5rem",
        paddingBottom: "2rem",
      }}
    >
      <SmallText>Welcome to UNI DOC</SmallText>
      <LargeText>Login to the Dashboard</LargeText>

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
          <label>E-mail</label>
          <OutlinedInput
            placeholder="Enter your email"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Helper>
        <Helper>
          <label>Password</label>
          <OutlinedInput
            placeholder="Enter your password"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Helper>

        <Button variant="contained" style={style} onClick={submitHandler}>
          Login
        </Button>

        {/* <HelperInner>
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
        </HelperInner> */}
        {/* <ButtonsContainer>
          <Button
            variant="outlined"
            startIcon={<FcGoogle />}
            sx={{
              border: "1px solid #5893FF",
              color: "#5893FF",
            }}
            onClick={() => signIn()}
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
        </ButtonsContainer> */}
      </FormControl>
    </Container>
  );
};

export default LoginForm;
