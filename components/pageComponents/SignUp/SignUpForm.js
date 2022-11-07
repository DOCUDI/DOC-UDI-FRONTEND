/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  OutlinedInput,
} from "@mui/material";
import Axios from "axios";
import { useRouter } from "next/router";
import { Helper, LargeText, SmallText, CardBox, RedParagraph } from "./style";
import { useTheme } from "@mui/material/styles";
import CityDropdown from "./CityDropdown";
import Slot from "./Slot";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/actions/signup.action";
import { SlotBox } from "./Slot";
import Working from "./Working";

const SignUpForm = () => {
  const theme = useTheme();
  const style = [
    {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "400",
      width: "100%",
      marginTop: "2rem",
      alignSelf: "center",
      marginBottom: "1rem",
    },
    {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "400",
      width: "50%",
      marginTop: "2rem",
      alignSelf: "center",
      marginBottom: "1rem",
    },
    {
      backgroundColor: "rgba(255, 0, 0, 0.6)",
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "400",
      width: "100%",
      marginTop: "2rem",
      alignSelf: "center",
      marginBottom: "1rem",
    },
  ];

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [specialization, setSpecialization] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [consultationfee, setConsultationfee] = useState();
  const [timeslots, setTimeslots] = useState([]);
  const [workingDays, setWorkingDays] = useState([]);
  const [imageSelected, setImageSelected] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);

  const handleSlot = (timeslts) => {
    setTimeslots((arr) => [...arr, timeslts]);
  };
  const handleDay = (day) => {
    setWorkingDays((working) => [...working, day.day]);
  };
  const handleCity = (c) => {
    setCity(c);
  };
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === undefined ||
      email === undefined ||
      password === undefined ||
      specialization === undefined ||
      address === undefined ||
      city === undefined ||
      consultationfee === undefined ||
      timeslots.length === 0 ||
      imageSelected.length === 0
    ) {
      setEmpty(true);
    } else {
      setEmpty(false);
      const data = {
        name,
        email,
        password,
        clinic_address: address,
        specialization,
        city,
        consultation_fee: consultationfee,
        time_slots: timeslots,
        working_days: workingDays,
        pfp: imageSelected,
      };
      console.log(data);
      dispatch(signup(data));
      router.push("/Login");
    }
    // console.log("iiiiiii",imageSelected);
  };

  const uploadingImage = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "doctor");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dcogm6vx9/image/upload",
      formData
    ).then((res) => {
      setImageSelected(res.data.url);
      console.log(image);
    });
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
          <Button variant="contained" style={style[1]}>
            <label htmlFor="files" className="btn">
              Select Image
            </label>
            <input type="file" id="files" hidden onChange={(e) => setImage(e.target.files[0])} />
          </Button>
        </Helper>
        <Helper>
          {image ? (
            <Button
              variant="contained"
              style={style[2]}
              onClick={uploadingImage}
            >
              Upload to cloud
            </Button>
          ) : (
            <></>
          )}
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
        {timeslots.length !== 0 ? (
          <Helper>
            <FormGroup
              sx={{
                width: "100%",
              }}
            >
              <label>Selected Time Slots</label>
              <CardBox>
                {timeslots.map((timeslot) => (
                  <SlotBox key={timeslot._id}>
                    <span
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {timeslot.startTime}
                    </span>
                    &nbsp;-&nbsp;
                    <span
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {timeslot.endTime}
                    </span>
                  </SlotBox>
                ))}
              </CardBox>
            </FormGroup>
          </Helper>
        ) : (
          <></>
        )}

        <Helper>
          <FormGroup
            sx={{
              width: "100%",
            }}
          >
            <label>Select Working Days</label>
            <CardBox>
              <Working onSelectDay={handleDay} />
            </CardBox>
          </FormGroup>
        </Helper>
        {workingDays.length !== 0 ? (
          <Helper>
            <FormGroup
              sx={{
                width: "100%",
              }}
            >
              <label>Selected Working Days</label>
              <CardBox>
                {workingDays.map((d) => (
                  <SlotBox key={Math.floor(Math.random() * 10)}>
                    <span
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {d}
                    </span>
                  </SlotBox>
                ))}
              </CardBox>
            </FormGroup>
          </Helper>
        ) : (
          <></>
        )}
        <Button variant="contained" style={style[0]} onClick={submitHandler}>
          Sign Up
        </Button>
        {empty && <RedParagraph>*Fields cannot be empty</RedParagraph>}
      </FormControl>
    </Container>
  );
};

export default SignUpForm;
