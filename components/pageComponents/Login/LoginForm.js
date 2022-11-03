/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Button, Container, FormControl, OutlinedInput } from "@mui/material";
import { Helper, LargeText, SmallText } from "./style";
import { useTheme } from "@mui/material/styles";
import { login } from "../../../redux/actions/login.action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RedParagraph } from "../SignUp/style";

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
  const [empty, setEmpty] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === undefined || password === undefined) {
      setEmpty(true);
    } else {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
      router.push("/");
    }
  };

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
        {empty && <RedParagraph>* Fields cannot be empty</RedParagraph>}
      </FormControl>
    </Container>
  );
};

export default LoginForm;
