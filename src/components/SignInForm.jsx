import { useState } from "react";
import LogoSignIn from "../assets/LogoSignIn.png";
import { Eye, EyeOff } from "lucide-react";

const MicrosoftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
    <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
  </svg>
);

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          Sign In
        </h1>
        <p
          className="text-center mb-6 text-base text-[#707A80]"
        >
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSignIn} autoComplete="off">
          {/* Email Field */}
          <div className="mb-4">
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
              className="w-full border rounded-sm px-4 py-2.5 outline-none transition-all"
              style={{
                fontSize: "14px",
                color: "#374151",
                borderColor: "#d1d5db",
                backgroundColor: "#fff",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />
          </div>

          {/* Password Field */}
          <div className="mb-2">
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
                className="w-full border rounded-sm px-4 py-2.5 pr-11 outline-none transition-all"
                style={{
                  fontSize: "14px",
                  color: "#374151",
                  borderColor: "#d1d5db",
                  backgroundColor: "#fff",
                }}
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
                {showPassword ? <Eye size={18}/> : <EyeOff size={18}/>}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-5">
            <a
              href="#"
              className="text-sm hover:underline text-[#006DFF]"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full rounded-sm py-3 text-white transition-opacity hover:opacity-90 active:opacity-80 bg-[#051C48]"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-5 gap-3">
          <div className="flex-1 h-px bg-[#D9D9D9]" />
          <span className="text-[#292929] font-medium">OR</span>
          <div className="flex-1 h-px bg-[#D9D9D9]" />
        </div>

        {/* Microsoft Sign In */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border rounded-sm py-2.5  transition-colors hover:bg-gray-50 active:bg-gray-100 text-[#1D1D1D] font-semibold"
        >
          <MicrosoftIcon />
          Sign in with Microsoft
        </button>

        {/* Sign Up */}
        <p className="text-center mt-5">
          <a
            href="#"
            className="font-medium underline text-[#006DFF]"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}