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

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65747 7.06086C2.17629 6.87154 2.75036 7.13865 2.93968 7.65747C3.59251 9.44649 4.75973 11.0006 6.29218 12.1257C6.30744 12.1362 6.32248 12.1472 6.3373 12.1586C6.3817 12.1908 6.4264 12.2227 6.47141 12.2542C8.09214 13.388 10.0223 13.9962 12.0003 13.9962C13.9782 13.9962 15.9084 13.388 17.5291 12.2542C17.5741 12.2227 17.6189 12.1908 17.6633 12.1586C17.6781 12.1472 17.6931 12.1362 17.7084 12.1257C19.2408 11.0006 20.408 9.44649 21.0609 7.65747C21.2502 7.13865 21.8243 6.87154 22.3431 7.06086C22.8619 7.25019 23.129 7.82425 22.9397 8.34307C22.2703 10.1774 21.1531 11.8072 19.6982 13.0889L20.7652 14.3562C21.121 14.7787 21.0668 15.4095 20.6443 15.7652C20.2219 16.121 19.591 16.0668 19.2353 15.6443L18.0861 14.2794C17.2611 14.785 16.3795 15.184 15.4624 15.4696L15.9765 17.7834C16.0962 18.3225 15.7563 18.8567 15.2171 18.9765C14.678 19.0962 14.1438 18.7563 14.0241 18.2171L13.5089 15.898C13.0106 15.9631 12.5067 15.9962 12.0003 15.9962C11.4938 15.9962 10.9899 15.9631 10.4917 15.898L9.97647 18.2171C9.8567 18.7563 9.32255 19.0962 8.78341 18.9765C8.24426 18.8567 7.9043 18.3225 8.02407 17.7834L8.5381 15.4696C7.62105 15.184 6.73942 14.785 5.91448 14.2794L4.76524 15.6443C4.40953 16.0668 3.77869 16.121 3.35621 15.7652C2.93372 15.4095 2.87959 14.7787 3.2353 14.3562L4.30232 13.0889C2.84747 11.8072 1.73023 10.1774 1.06086 8.34307C0.87154 7.82425 1.13865 7.25019 1.65747 7.06086Z" fill="#292929"/>
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
        className=" bg-white rounded-sm shadow-lg md:p-8 py-8 px-4 w-full sm:w-[600px]"
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