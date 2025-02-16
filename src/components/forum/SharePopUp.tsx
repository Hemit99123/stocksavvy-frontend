"use client";

import useSharePopupStore from "@/store/sharepopup";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";



const SharePopUp = () => {

    const status = useSharePopupStore((state) => state.status)
    const togglePopupStatus = useSharePopupStore((state) => state.toggleStatus)

  if (!status) return null; // Prevents rendering when closed
  const url = window.location

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* MODAL CONTAINER */}
      <div className="bg-white w-full max-w-md mx-4 p-6 rounded-xl shadow-lg">
        {/* MODAL HEADER */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
          <p className="text-xl font-bold text-gray-800">Share Modal</p>
          <button
            onClick={togglePopupStatus}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 text-gray-600"
          >
            &times;
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="mt-4">
          <p className="text-sm">Share this link via</p>
          
          <div className="flex justify-around my-4">
            {[
              { platform: "Facebook", icon: <FaFacebook />, color: "bg-blue-600" },
              { platform: "X", icon: <FaX />, color: "bg-black" },
              { platform: "Instagram", icon: <FaInstagram />, color: "bg-pink-600" },
            ].map(({ platform, icon, color }) => (
              <button
                key={platform}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color} shadow-lg hover:opacity-80`}
                aria-label={`Share on ${platform}`}
              >
                {icon}
              </button>
            ))}
          </div>

          <p className="text-sm">Or copy link</p>
          <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2 px-2 rounded-lg">
            <input
              type="text"
              className="outline-none bg-transparent w-full ml-2 text-gray-700"
              value={`${url}`}
              readOnly
            />
            <button
              onClick={() => navigator.clipboard.writeText(`${url}`)}
              className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopUp;
