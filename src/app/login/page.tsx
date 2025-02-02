"use client"

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import httpHeader from "@/services/httpHeader";

const Auth = () => {

  const handleLoginGoogleSSO =  useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      await httpHeader.post("/auth/login", {
        access_token: credentialResponse.access_token
     })      
    },
    onError: () => {
      alert("An error has occured with Google!")
    },
  });

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={() => handleLoginGoogleSSO()}>Sign in with google</button>
    </div>
  );
};

export default Auth;
