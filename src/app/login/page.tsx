"use client"

import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import httpHeader from "@/services/httpHeader";

const Auth = () => {

  const [email, setEmail] = useState("")
  const [otp, setOTP] = useState("")
  const [name, setName] = useState("")
  const handleLoginGoogleSSO = async (idToken: string | undefined) => {
     await httpHeader.post("/auth/login/google", {
        idToken
     })
  }

  const handleGenerateOTP = async () => {
    await httpHeader.post("/auth/assign-otp", {
      email
    })
  }

  const handleVerifyOTPLogin = async () => {
    await httpHeader.post("/auth/login/email-magic", {
      email,
      otp,
      name
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
