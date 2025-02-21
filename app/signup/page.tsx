"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e:any) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log({ fullname,  email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid sm:grid-cols-12 gap-4 w-full h-full bg-white">
        {/* Left Column */}
        <div className="hidden sm:flex items-center justify-center sm:col-span-7">
          <img src="/assest/left.png" alt="left" className="w-full h-full object-cover " />
        </div>


        {/* Right Column */}
        <div className="flex items-center justify-center sm:col-span-5 bg-white px-6 py-8">
          <div className="w-full max-w-md p-6">
            <h1 className="text-2xl sm:text-3xl font-semibold font-[Inter] mb-2">SIGN UP</h1>
            <p className="text-[17px] text-[#425583] font-[Inter] mb-6">
              Let's create your account
            </p>

            <form onSubmit={handleSignup}>
              {/* Full Name */}
              <div className="relative mb-4">
                <label className="block text-[12px] text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}

                    placeholder="Enter your Full Name"
                    className="w-full h-[48px] pl-[40px] pr-4 border border-[#14553E] rounded focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                  <img
                    src="/images/person.png"
                    alt="icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative mb-4">
                <label className="block text-[12px] text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    placeholder="Enter your email"
                    className="w-full h-[48px] pl-[40px] pr-4 border border-[#14553E] rounded focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                  <img
                    src="/images/email.png"
                    alt="icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative mb-4">
                <label className="block text-[12px] text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Set your password"
                    className="w-full h-[48px] pl-[40px] pr-10 border border-[#14553E] rounded focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                   <img src="/images/lock.png" alt="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="relative mb-4">
                <label className="block text-[12px] text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full h-[48px] pl-[40px] pr-10 border border-[#14553E] rounded focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                   <img src="/images/lock.png" alt="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="w-4 h-4 accent-[#A67271]  text-[#14553E] border-gray-300 rounded focus:ring-[#A67271]"
                />
                <label className="ml-2 text-[14px] text-gray-700">
                  I agree with the{" "}
                  <Link href="/terms" className="text-[#14553E]">
                    terms & conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Link href="/basic">
                <button
                  type="submit"
                  className="w-full bg-[#14553E] text-white py-3 rounded"
                >
                  Sign Up
                </button></Link>


              {/* Already Have Account */}
              <div className="pt-4 text-center">
                <p className="text-[14px]" handleSignup>
                  Already have an account?{" "}
                  <Link href="/SignPage" className="text-[#14553E]">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;