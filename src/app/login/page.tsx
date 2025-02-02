"use client"

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import httpHeader from "@/services/httpHeader";

const Auth = () => {

  const handleLoginGoogleSSO = async (id_token: string | undefined) => {
     await httpHeader.post("/auth/login", {
        id_token
     })
  }
  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={(response) => {
          handleLoginGoogleSSO(response.credential); // This is your id token
        }}
        onError={() => {
          alert("An error has occured!")
        }}
      />
    </div>
  );
};

export default Auth;
