/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  OutlinedInput,
} from "@mui/material";
import { useRouter } from "next/router";
import { Helper, LargeText, SmallText, CardBox } from "./style";
import { useTheme } from "@mui/material/styles";
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
  const router = useRouter();

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
    dispatch(signup(data));
    router.push("/Login");
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
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Full Name</label>
            <OutlinedInput
              placeholder="Enter your name"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>E-mail</label>
            <OutlinedInput
              placeholder="Enter your email"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Password</label>
            <OutlinedInput
              placeholder="Enter your password"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Confirm Password</label>
            <OutlinedInput
              placeholder="Confirm password"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Specialization</label>
            <OutlinedInput
              placeholder="Enter your specialization"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Clinic Address</label>
            <OutlinedInput
              placeholder="Enter your address"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <CityDropdown onSelectCity={handleCity} />
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Consultation Fee</label>
            <OutlinedInput
              placeholder="Enter an amount"
              sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
              onChange={(e) => setConsultationfee(e.target.value)}
            />
          </FormGroup>
        </Helper>
        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Select Time Slots</label>
            <CardBox>
              <Slot onSelectSlot={handleSlot} />
            </CardBox>
          </FormGroup>
        </Helper>
        <Button variant="contained" style={style} onClick={submitHandler}>
          Sign Up
        </Button>
      </FormControl>
    </Container>
  );
};

export default SignUpForm;
