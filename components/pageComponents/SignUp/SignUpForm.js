/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Button, Container, FormControl, OutlinedInput } from "@mui/material";
import {
  ButtonsContainer,
  Helper,
  HelperInner,
  LargeText,
  SmallText,
  CardBox,
} from "./style";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import CityDropdown from "./CityDropdown";
import Slot from "./Slot";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/actions/signup.action";

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

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [specialization, setSpecialization] = useState();
  // const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [consultationfee, setConsultationfee] = useState();
  const [timeslots, setTimeslots] = useState([]);
  const dispatch = useDispatch();

  const handleSlot = (timeslts) => {
    setTimeslots((arr) => [...arr, timeslts]);
  };
  const handleCity = (c) => {
    setCity(c);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      clinic_address: address,
      specialization,
      city,
      consultation_fee: consultationfee,
      time_slots: timeslots,
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // console.log(timeslots)
    dispatch(signup(data));
    
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
            onChange={(e) => setName(e.target.value)}
          />
        </Helper>
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
        <Helper>
          <label>Confirm Password</label>
          <OutlinedInput
            placeholder="Confirm password"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </Helper>
        <Helper>
          <label>Specialization</label>
          <OutlinedInput
            placeholder="Enter your specialization"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </Helper>
        <Helper>
          <label>Clinic Address</label>
          <OutlinedInput
            placeholder="Enter your address"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Helper>
        <CityDropdown onSelectCity={handleCity} />
        <Helper>
          <label>Consultation Fee</label>
          <OutlinedInput
            placeholder="Enter an amount"
            sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
            onChange={(e) => setConsultationfee(e.target.value)}
          />
        </Helper>
        <Helper>
          <label>Select Time Slots</label>
        </Helper>
        <CardBox>
          <Slot onSelectSlot={handleSlot} />
        </CardBox>
        <Button variant="contained" style={style} onClick={submitHandler}>
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
