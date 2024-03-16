import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios'


function AuthPage() {
  const [data, setData] = useState({ email: "", password: "" });

  function changeInp(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function clickButton() {
    try {
      const response = await axios.post("http://localhost:3000/user/auth", data);
        withCredentials: true,
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <h1>Sign In</h1>
        <p>
          Log in to access your account or create one. Verify your email for
          seamless access.
        </p>

        <div>
          <TextField
            onChange={changeInp}
            style={{ width: "100%" }}
            id="email"
            label="Your email"
            name="email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={changeInp}
            style={{ width: "100%" }}
            id="password"
            label="Must be at least 8 characters."
            name="password"
            variant="outlined"
            type="password"
          />
        </div>
        <Button
          onClick={clickButton}
          style={{ width: "15%", marginLeft: "auto" }}
          variant="contained"
        >
          Continue
        </Button>
        <div className={style.sign_up}>
          <p style={{ textAlign: "end" }}>Not registered yet? Sign Up</p>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
