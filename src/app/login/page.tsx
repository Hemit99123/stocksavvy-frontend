"use client"

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import httpHeader from "@/services/httpHeader";

const Auth = () => {

  const loginGoogleSSO = async (access_token: string | undefined) => {
     await httpHeader.post("http://localhost:3001/auth/login", {
        access_token
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
