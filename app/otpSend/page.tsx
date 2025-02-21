"use client";

import Link from "next/link";
import React, { useState } from "react";

const Resend = () => {
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

 
  const handleOtpChange = (e:any, index:any) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };


  const handleSubmit = () => {

    const otpCode = otp.join("");
    console.log("OTP Code: ", otpCode);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid sm:grid-cols-12 gap-4 w-full h-full bg-white">
        <div className="hidden sm:flex items-center justify-center bg-[#A67271] sm:col-span-7">
          <div>
            <img
              src="/images/leftlock.png"
              alt="Illustration"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        <div className="flex items-center justify-center sm:col-span-5 bg-white px-6 py-8">
          <div className="w-full max-w-md">
            <div className="flex justify-start mb-6">
              <img
                className="w-12 h-12 object-contain"
                src="/images/forgetlock.png"
                alt="Logo"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold font-[Inter] mb-2">
              OTP Verification
            </h1>
            <p className="text-[17px] text-[#425583] font-[Inter] mb-6">
              Check your email to see the verification code.
            </p>

            {/* OTP Input */}
            <div className="flex justify-between gap-2 sm:gap-4 mb-6">
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength = {1}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="w-12 h-12 border border-[#14553E] rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                />
              ))}
            </div>

            {/* Verify Button */}
            <Link href= "/passwordreset">
            <button
              onClick={handleSubmit}
              className="w-full h-12 bg-[#14553E] text-white rounded-md font-medium hover:bg-[#14553E] transition duration-200 mb-4"
            >
              Verify
            </button>
            </Link>

            <p className="text-center text-sm text-[#425583]">
              Resend code in <span className="font-semibold text-[#14553E]">00:59</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resend;



