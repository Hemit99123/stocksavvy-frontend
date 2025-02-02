import React from "react";

const GetStarted = () => {
  return (
    <div className="h-screen w-1/2 bg-gradient-to-b from-green-900 to-black flex flex-col items-center justify-center text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Get Started!</h1>
        <p className="mt-4 text-lg">Complete these easy steps to get started.</p>
      </div>
      
      <div className="w-96">
        <div className="flex flex-col space-y-4">
          {/* Step 1 */}
          <div className="w-full cursor-pointer text-center bg-gray-600 py-3 rounded-lg text-lg font-medium shadow-md focus:ring focus:ring-purple-600">
            1. Sign up your account
          </div>
          
          {/* Step 2 */}
          <div className="w-full cursor-pointer text-center bg-gray-600 py-3 rounded-lg text-lg font-medium focus:ring focus:ring-purple-600">
            2. Set up your workspace
          </div>
          
          {/* Step 3 */}
          <div className="w-full cursor-pointer text-center bg-gray-600 py-3 rounded-lg text-lg font-medium focus:ring focus:ring-purple-600">
            3. Set up your profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
