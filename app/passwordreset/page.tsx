"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({ password, confirmpassword });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid sm:grid-cols-12 gap-4 w-full h-full bg-white">
        {/* Left Section */}
        <div className="hidden sm:flex items-center justify-center sm:col-span-7">
          <img src="/images/leftlock.png" alt="lock" className="w-full h-full" />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center sm:col-span-5 bg-white px-6 py-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-start mb-6">
              <img className="w-12 h-12 object-contain" src="/images/forgetlock.png" alt="Logo" />
            </div>

            {/* Header */}
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Set a New Password</h1>
            <p className="text-[17px] text-[#425583] font-[Inter] mb-6">Enter your password to complete the reset.</p>

            <form onSubmit={handleSubmit}>
              {/* New Password */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter new password"
                    className="w-full h-[48px] pl-[40px] pr-12 border border-[#14553E] focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                  <img src="/images/lock.png" alt="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm new password"
                    className="w-full h-[48px] pl-[40px] pr-12 border border-[#14553E]  focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                  <img src="/images/lock.png" alt="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Link href="/signup">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#14553E] text-white rounded-md font-medium hover:bg-[#14553E] transition duration-200"
                >
                  Save New Password
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
