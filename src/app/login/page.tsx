"use client";

import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import httpHeader from "@/services/httpHeader";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [name, setName] = useState("");
  const [isOTPGenerated, setIsOTPGenerated] = useState(false); // Track if OTP is generated

  const handleLoginGoogleSSO = async (idToken: string | undefined) => {
    try {
      const response = await httpHeader.post("/auth/login/google", {
        idToken,
      });
      alert("Google login successful!");
      console.log(response.data);
    } catch (error) {
      alert("Google login failed. Please try again.");
      console.error(error);
    }
  };

  const handleGenerateOTP = async () => {
    try {
      await httpHeader.post("/auth/assign-otp", {
        email,
      });
      setIsOTPGenerated(true); // Mark OTP as generated
      alert("OTP has been sent to your email!");
    } catch (error) {
      alert("Failed to generate OTP. Please check your email and try again.");
      console.error(error);
    }
  };

  const handleVerifyOTPLogin = async () => {
    try {
      const response = await httpHeader.post("/auth/login/email-magic", {
        email,
        otp,
        name,
      });
      alert("OTP verification successful!");
      console.log(response.data);
    } catch (error) {
      alert("OTP verification failed. Please check your OTP and try again.");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={(response) => {
          handleLoginGoogleSSO(response.credential); // This is your id token
        }}
        onError={() => {
          alert("An error has occurred!");
        }}
      />

      <hr style={{ margin: "20px 0" }} />

      <h2>Login with Email</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button
          onClick={handleGenerateOTP}
          style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none" }}
        >
          Generate OTP
        </button>
      </div>

      {isOTPGenerated && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <button
            onClick={handleVerifyOTPLogin}
            style={{ width: "100%", padding: "10px", backgroundColor: "#2196F3", color: "white", border: "none" }}
          >
            Verify OTP and Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;