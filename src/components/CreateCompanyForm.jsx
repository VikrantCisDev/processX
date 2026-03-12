import { useState } from "react";
import LogoSignIn from "../assets/LogoSignIn.png";

export default function CreateCompanyForm() {
  const [companyName, setCompanyName] = useState("");
  const [uniqueIdentifier, setUniqueIdentifier] = useState("");

  // Auto-generate slug from company name
  const handleCompanyNameChange = (e) => {
    const value = e.target.value;
    setCompanyName(value);
    setUniqueIdentifier(
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-"),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6 md:p-10 z-10">
      <div className=" w-full sm:w-[600px]">
        {/* Top logo + header — outside the card, like the image */}
        <div className="flex flex-col items-center text-center mb-6 space-y-1">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={LogoSignIn} alt="ELM Logo" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D1D1D] ">
            Welcome to ProcessX
          </h1>
          <p className="text-sm sm:text-base text-[#707A80]">
            Let's set up your first organization
          </p>
          <p className="text-sm sm:text-base text-[#707A80] ">
            Signed in as{" "}
            <a href="#" className="text-[#006DFF] hover:underline">
              mukul.sharma@jmminnovations.com
            </a>
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-sm shadow-form px-4 py-5 sm:p-6 md:p-8">
          {/* Building icon */}
          <div
            className="w-20 h-20 flex items-center justify-center mb-4 lg:mb-6 bg-[#EBF7FF]"
          >
            <BuildingIcon />
          </div>

          {/* Section heading */}
          <h2 className="text-xl font-bold text-[#1D1D1D] mb-1">
            Company Information
          </h2>
          <p className="text-sm text-[#707A80] mb-6 leading-snug">
            Enter your company or organization details. You will be
            automatically assigned as System Admin and Company Admin.
          </p>

          <form onSubmit={handleSubmit} autoComplete="off" className="lg:space-y-6 space-y-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-[#1D1D1D] mb-1.5">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Example: Advanced Tech Company"
                value={companyName}
                onChange={handleCompanyNameChange}
                className="w-full border rounded-sm px-4 py-2.5 outline-none transition-all text-sm text-[#374151] placeholder-[#9ca3af]"
                style={{ borderColor: "#d1d5db", backgroundColor: "#fff" }}
                onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>

            {/* Unique Identifier */}
            {/* <div>
              <label className="block text-sm font-medium text-[#1D1D1D] mb-1.5">
                Unique Identifier <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="advanced-tech"
                value={uniqueIdentifier}
                onChange={(e) => setUniqueIdentifier(e.target.value)}
                className="w-full border rounded-sm px-4 py-2.5 outline-none transition-all text-sm text-[#374151] placeholder-[#9ca3af]"
                style={{ borderColor: "#d1d5db", backgroundColor: "#fff" }}
                onFocus={(e) => (e.target.style.borderColor = "#1a3a5c")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div> */}
              {/* <p className="text-[#707A80]">
                Will be used in the company URL
              </p> */}

            {/* Info box */}
            <div
              className="rounded-sm p-4 bg-[#F7F8F9]"
            >
              <p className="text-base font-bold text-[#1D1D1D] mb-2">
                What will happen?
              </p>
              <ul className="space-y-1 !list-disc sm:pl-6 pl-4">
                {[
                  "Company will be created with all features enabled",
                  "You will be System Admin and Company Admin.",
                  "You can manage users and roles later",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base text-[#707A80]"
                  >
                    <div className="flex items-start gap-2">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-sm py-3 text-white transition-opacity hover:opacity-90 active:opacity-80 bg-[#051C48]"
            >
              Create Company
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const BuildingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M36.6673 35.418H3.33398C2.64398 35.418 2.08398 35.978 2.08398 36.668C2.08398 37.358 2.64398 37.918 3.33398 37.918H36.6673C37.3573 37.918 37.9173 37.358 37.9173 36.668C37.9173 35.978 37.3573 35.418 36.6673 35.418Z"
      fill="#288CFF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5007 37.9173C21.8107 37.9173 21.2507 37.3573 21.2507 36.6673V25.834C21.2507 25.2807 21.4707 24.7523 21.8607 24.3607C22.2523 23.9707 22.7823 23.7507 23.334 23.7507H28.334C28.8857 23.7507 29.4157 23.9707 29.8073 24.3607C30.1973 24.7523 30.4173 25.2807 30.4173 25.834V36.6673C30.4173 37.3573 29.8573 37.9173 29.1673 37.9173H33.334C34.024 37.9173 34.584 37.3573 34.584 36.6673V5.00065C34.584 4.22732 34.2773 3.48565 33.729 2.93898C33.1823 2.39065 32.4407 2.08398 31.6673 2.08398C28.7807 2.08398 22.8873 2.08398 20.0007 2.08398C19.2273 2.08398 18.4857 2.39065 17.939 2.93898C17.3907 3.48565 17.084 4.22732 17.084 5.00065V36.6673C17.084 37.3573 17.644 37.9173 18.334 37.9173H22.5007ZM23.7507 27.084C23.7507 26.8623 23.839 26.6507 23.994 26.494C24.1507 26.339 24.3623 26.2507 24.584 26.2507H27.084C27.544 26.2507 27.9173 26.624 27.9173 27.084V35.4173H23.7507C23.7507 35.4173 23.7507 29.344 23.7507 27.084ZM24.584 19.584H27.084C27.774 19.584 28.334 19.024 28.334 18.334C28.334 17.644 27.774 17.084 27.084 17.084H24.584C23.894 17.084 23.334 17.644 23.334 18.334C23.334 19.024 23.894 19.584 24.584 19.584ZM24.584 14.584H27.084C27.774 14.584 28.334 14.024 28.334 13.334C28.334 12.644 27.774 12.084 27.084 12.084H24.584C23.894 12.084 23.334 12.644 23.334 13.334C23.334 14.024 23.894 14.584 24.584 14.584ZM24.584 9.58398H27.084C27.774 9.58398 28.334 9.02398 28.334 8.33398C28.334 7.64398 27.774 7.08398 27.084 7.08398H24.584C23.894 7.08398 23.334 7.64398 23.334 8.33398C23.334 9.02398 23.894 9.58398 24.584 9.58398Z"
      fill="#288CFF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.417 12.084V36.6673C15.417 37.114 15.517 37.539 15.697 37.9173H6.66699C5.97699 37.9173 5.41699 37.3573 5.41699 36.6673V15.0007C5.41699 13.389 6.72366 12.084 8.33366 12.084H15.417ZM9.58366 31.2507H12.0837C12.7737 31.2507 13.3337 30.6907 13.3337 30.0007C13.3337 29.3107 12.7737 28.7507 12.0837 28.7507H9.58366C8.89366 28.7507 8.33366 29.3107 8.33366 30.0007C8.33366 30.6907 8.89366 31.2507 9.58366 31.2507ZM9.58366 26.2507H12.0837C12.7737 26.2507 13.3337 25.6907 13.3337 25.0007C13.3337 24.3107 12.7737 23.7507 12.0837 23.7507H9.58366C8.89366 23.7507 8.33366 24.3107 8.33366 25.0007C8.33366 25.6907 8.89366 26.2507 9.58366 26.2507ZM9.58366 21.2507H12.0837C12.7737 21.2507 13.3337 20.6907 13.3337 20.0007C13.3337 19.3107 12.7737 18.7507 12.0837 18.7507H9.58366C8.89366 18.7507 8.33366 19.3107 8.33366 20.0007C8.33366 20.6907 8.89366 21.2507 9.58366 21.2507Z"
      fill="#288CFF"
    />
  </svg>
);

