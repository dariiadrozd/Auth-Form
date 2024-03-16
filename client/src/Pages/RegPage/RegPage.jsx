import Header from "../../../Components/Header/Header";
import style from "../RegPage/style.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios'
import { useState } from "react";

function RegPage() {
  const [data, setData] = useState({})

  function changeState(e) {
    setData({ ...data, [e.target.name]: e.target.value})
  }

 async function sendARequest(){
  const response = await axios.post("http://localhost:3000/user", data)
  console.log(response);
 }
  return (
    <>
      <Header></Header>
      <div className={style.wrapper}>
        <h1>Welcome, let's create an account</h1>
        <p>
          Create an account to keep track of your customers, and contributors.
          Once your account has been created then don’t forget to verify your
          account through mail.
        </p>

        <div className={style.name}>
          <TextField onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
          />
          <TextField onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Surname"
            name="surname"
            variant="outlined"
          />
        </div>
        <div>
          <TextField onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your email"
            name="email" 
            variant="outlined"
          />
        </div>
        <div>
          <TextField onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Must be at least 8 characters."
            name="password" 
            variant="outlined"
          />
        </div>
        <Button onClick={sendARequest}
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

export default RegPage;