import { useState } from "react";
import LogoSignIn from "../assets/LogoSignIn.png";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { EyeClosed } from "lucide-react";


export default function CreateAccountForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          Create Account
        </h1>
        <p
          className="text-center mb-6 text-base text-[#707A80]"
        >
          Create your account to get started
        </p>

        <form onSubmit={handleSignIn} autoComplete="off">
          {/* Fullname Field */}
          <div className="mb-4">
            <label
              className="block mb-1.5 font-medium text-sm text-[#1D1D1D]"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-sm px-4 py-2.5 outline-none transition-all text-sm text-gray-700 border border-gray-300 bg-white"
              onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block mb-1.5 font-medium text-sm text-[#1D1D1D]"
            >
              Enter Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm px-4 py-2.5 outline-none transition-all text-sm text-gray-700 border border-gray-300 bg-white"
              onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block mb-1.5 font-medium"
              style={{ fontSize: "14px", color: "#1D1D1D" }}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-sm px-4 py-2.5 pr-11 outline-none transition-all text-sm text-gray-700 border border-gray-300 bg-white"
                placeholder="********"
                onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <Eye size={18}/> : <EyeClosed size={18}/>}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              className="block mb-1.5 font-medium"
              style={{ fontSize: "14px", color: "#1D1D1D" }}
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-sm px-4 py-2.5 pr-11 outline-none transition-all text-sm text-gray-700 border border-gray-300 bg-white"
                placeholder="********"
                onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
              >
                {showConfirmPassword ? <Eye size={18}/> : <EyeClosed size={18}/>}
              </button>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full rounded-sm py-3 text-white transition-opacity hover:opacity-90 active:opacity-80 bg-[#051C48]"
          >
            Create Account
          </button>
        </form>

        {/* Sign Up */}
        {/* <p className="text-center md:mt-6 mt-4 font-medium">
          Already have an account? {" "}
          <Link to="/sign-in" className=" underline text-[#006DFF]">
            Sign In
          </Link>
        </p> */}
      </div>
    </div>
  );
}