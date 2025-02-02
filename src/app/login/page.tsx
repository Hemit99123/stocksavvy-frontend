"use client"

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Auth = () => {

  const loginGoogleSSO = async (access_token: string | undefined) => {
     await axios.post("http://localhost:3001/auth/login", {
        access_token
     }, {
      withCredentials: true // this allows the cookie to be added to the frontend browser
     })
  }
  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={(response) => {
          loginGoogleSSO(response.credential); // This is your access token
        }}
        onError={() => {
          alert("An error has occured!")
        }}
      />
    </div>
  );
};

export default Auth;
