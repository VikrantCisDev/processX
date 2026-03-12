import { useState } from "react";
import LogoSignIn from "../assets/LogoSignIn.png";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className=" flex items-center justify-center p-4 z-10 md:p-0 px-4"
    >
      <div
        className=" bg-white rounded-sm shadow-form md:p-8 py-8 px-4 w-full sm:w-[600px]"
      >
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img src={LogoSignIn} alt="ELM Logo" />
        </div>

        {/* Heading */}
        <h1
          className="text-center font-bold mb-1 text-xl md:text-2xl text-[#1D1D1D]"
        >
          Forgot Password?
        </h1>
        <p
          className="text-center mb-6 text-base text-[#707A80]"
        >
          Enter your email and we'll send you <br className="md:block hidden"/> a password reset link
        </p>

        <form onSubmit={handleSignIn} autoComplete="off">
          {/* Email Field */}
          <div className="md:mb-6 mb-4">
            <label
              className="block mb-1.5 font-medium text-sm text-[#1D1D1D]"
            >
              Enter Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-sm px-4 py-2.5 outline-none transition-all text-sm text-[#374151] border-[#d1d5db] bg-white"
              onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />
          </div>

          {/* Send Rest Link Button */}
          <button
            type="submit"
            className="w-full rounded-sm py-3 mb-4 text-white transition-opacity hover:opacity-90 active:opacity-80 bg-[#051C48]"
          >
            Send Rest Link
          </button>

          <button
            type="submit"
            className="w-full rounded-sm py-3 text-[#051C48] font-medium transition-opacity hover:opacity-90 active:opacity-80 border-[#051C48] border"
          >
            Back to Login
          </button>
        </form>

      </div>
    </div>
  );
}