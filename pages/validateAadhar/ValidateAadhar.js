import { Button, Container, OutlinedInput } from "@mui/material";
import React from "react";
import {
  Helper,
  LargeText,
} from "../../components/pageComponents/SignUp/style";
import { useTheme } from "@mui/material/styles";

const ValidateAadhar = () => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    width: "100%",
    marginTop: "1rem",
    alignSelf: "center",
    marginBottom: "1rem",
  };
  const style1 = {
    backgroundColor: "#9FABBF",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "400",
    width: "100%",
    marginTop: "1rem",
    alignSelf: "center",
    marginBottom: "1rem",
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        border: "1px solid #5893FF",
        height: "50vh",
        width: "35vw",
        borderRadius: "0.5rem",
        marginTop: "4rem",
        backgroundColor: "#F5F5F5",
      }}
    >
      <LargeText>Aadhar Validation</LargeText>
      <Helper>
        <label>Aadhar Number</label>
        <OutlinedInput
          placeholder="Enter your aadhar number"
          sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
        />
        <Button variant="contained" style={style}>
          Send OTP
        </Button>
      </Helper>
      <Helper>
        <label>Enter your OTP</label>
        <OutlinedInput
          placeholder="Enter your OTP"
          sx={{ border: "1px solid #5993ff", width: "100%", height: "5vh" }}
        />
        <Button
          variant="contained"
          style={style1}
        >
          Confirm
        </Button>
      </Helper>
    </Container>
  );
};

export default ValidateAadhar;
