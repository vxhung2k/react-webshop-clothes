import React from "react";
import { useState } from "react";
import '../Login/Login.css'
import {HomePage} from '../../container'

export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);



  const data = [
    {
      username: "hung",
      password: "123"
    },
    {
      username: "vxhung",
      password: "442000"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = data.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (

    
      <div className="form">
        
        <form className="login__form" onSubmit={handleSubmit}>
        <h1>Pleased Login</h1>
          <div className="input-container">
            <label>Username :</label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password :</label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div >

          <div className="button-container">
            <input type="submit" />
          </div>

        </form>
      </div>
    
  );




  return (
    <div className="login-form">{isSubmitted ? < HomePage/> : renderForm}</div>






  )
}