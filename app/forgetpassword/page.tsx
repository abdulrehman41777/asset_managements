"use client";

import Link from "next/link";
import React, { useState } from "react";

const forget = () => {
  const [email, setEmail] = useState("");

  const handleLogin = (e:any) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid sm:grid-cols-12 gap-4 w-full h-full bg-white">
        {/* Left Column */}
        <div className=" hidden sm:flex items-center justify-center  sm:col-span-7">
          <div>
            <img
              src="/images/leftlock.png"
              alt="Illustration"
              className="w-full h-full object-cover  "
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center sm:col-span-5 bg-white px-6 py-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-start mb-6">
              <img
                className="w-16 h-16 object-contain"
                src="/images/forgetlock.png"
                alt="Logo"
              />
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-semibold font-[Inter] mb-2">
              Forget Password?
            </h1>
            <p className="text-[17px] text-[#425583] font-[Inter] mb-6">
              Enter your email to reset your password.
            </p>

            {/* Form */}
            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="relative mb-6">
                <label className="block font-[Inter] text-xs sm:text-sm text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full h-[48px] pl-[40px] pr-4 border border-[#14553E] focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                  <img
                    src="/images/email.png"
                    alt="Email Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Link href="/otpSend">
                <button
                  type="submit"
                  className="w-full h-12 sm:h-[48px] bg-[#14553E] text-white  font-medium  transition duration-200"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forget;