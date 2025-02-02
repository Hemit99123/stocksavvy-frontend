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
    <div className="mx-auto p-6 bg-white rounded-lg">

      <h1 className="font-bold text-4xl mb-3">Welcome Back!</h1>

      <div className="max-w-md ">
      {/* Google Login */}
      <div className="w-full mb-6">
        <GoogleLogin
          onSuccess={(response) => {
            handleLoginGoogleSSO(response.credential); // This is your id token
          }}
          onError={() => {
            alert("An error has occurred!");
          }}
          width="100%" // Make the Google Login button full width
        />
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Email Login */}
      {!isOTPGenerated && (
        <>
          <h2 className="text-xl font-semibold mb-4">Login with Email</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 placeholder:text-xs rounded-lg mb-8"
            />
            <button
              onClick={handleGenerateOTP}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Generate OTP
            </button>
          </div>
        </>
      )}

      {isOTPGenerated && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 placeholder:text-xs rounded-lg focus:outline-none mb-4"
          />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 placeholder:text-xs rounded-lg focus:outline-none mb-4"
          />
          <button
            onClick={handleVerifyOTPLogin}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Login
          </button>
        </div>
      )}
      </div>

    </div>
  );
};

export default Auth;