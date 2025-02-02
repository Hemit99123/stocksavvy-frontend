"use client"

import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Auth = () => {
  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={(response) => {
          console.log("Access Token:", response.credential); // This is your access token
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Auth;
