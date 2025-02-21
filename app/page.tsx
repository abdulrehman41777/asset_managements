"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const signin = () => {
  const [email, setEmail] = useState("admain99@email");
  const [password, setPassword] = useState("123456789");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e:any) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to Forgot Password page...");
  };

  
    const handleGoogleSignIn = () => {
      window.location.href = "https://accounts.google.com/signin";
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid sm:grid-cols-12 gap-4 bg-white">
        {/* Left Column */}
        <div className="hidden sm:flex items-center justify-center sm:col-span-7">
          <img src="/images/lefticon.png" alt="left" className="w-full h-full object-cover " />
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center sm:col-span-5 bg-white px-6 py-8">
          <div className="w-full max-w-md">
            <h1 className="text-2xl sm:text-3xl font-semibold font-[Inter] mb-2">Welcome Back</h1>
            <p className="text-[14px] text-[#425583] font-[Inter] mb-6">Sign in to your account</p>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="relative mb-4">
                <label className="block text-[17px] text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full h-[48px] pl-[40px] pr-4 border border-[#14553E] focus:outline-none focus:ring-2 focus:ring-[#14553E]"
                  />
                  <img src="/images/email.png" alt="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative mb-4">
                <label className="block text-[17px] text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full h-[48px] pl-[40px] pr-12 border border-[#14553E] rounded focus:outline-none focus:ring-2 focus:ring-[#14553E]"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 accent-[#14553E]"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-[14px] text-gray-700">
                    Remember Me
                  </label>
                </div>
                <Link href="/forgetpassword" onClick={handleForgotPassword}>
                  <span className="text-sm text-[#14553E] hover:underline">Forgot Password?</span>
                </Link>
              </div>

              {/* Sign In Button */}
            <Link href="/basic" >
            <button type="submit" className="w-full bg-[#14553E] text-white py-3 rounded hover:bg-[#14553E] transition duration-200 mb-20">
                Sign In
              </button>
            </Link>
            <div className="relative">
      <button
        onClick={handleGoogleSignIn}
        className="w-full h-[48px] pl-[40px] pr-4 border border-[#14553E] focus:outline-none focus:ring-2 focus:ring-[#14553E] flex items-center justify-center"
      >
        <img
          src="/images/google.png"
          alt="Google Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
        />
        Sign in with Google
      </button>
    </div>
 
 <div>     </div>
              {/* Already Have Account */}
              <div className="pt-4 text-center">
                <p className="text-[14px] text-[#425583] font-[Inter]">
                  Don't have an account? <Link href="/signin" className="text-[#14553E]">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;

