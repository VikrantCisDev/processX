import { ArrowUpRight } from "lucide-react";
// import { ProcessXLogo } from "./Header"
import HeroBg from "../assets/heroBg.png";
import WaveImage from "../assets/waveShape.png";
import SmallLogo from "../assets/cubicalLogo.svg";
import DashboardPreviewImg from "../assets/hero-dash-img.png";

function HeroSection() {
  return (
    <section
      className={`w-full bg-[#EDF7FF] bg-[url('${HeroBg}')] bg-cover bg-center pb-20 md:pb-28 pt-10 md:pt-16 relative overflow-hidden min-h-dvh flex items-center`}
    >
      {/* Wave Image */}
      <img
        src={WaveImage}
        alt="Wave Shape"
        className="absolute bottom-0 left-0 w-full h-[62%]"
      />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-10 lg:max-w-[568px]">
            {/* middle arrow decorative */}
            <div className="absolute top-1/2 -right-14 transform -translate-y-1/2 lg:block hidden">
              <DecorativeArrow />
            </div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-base text-gray-600 shadow-sm border border-gray-100">
              <img src={SmallLogo} alt="Cubical Logo" />
              <span className="text-gray-700">Complete Saudi Platform</span>
            </div>

            {/* Heading */}
            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[Roboto] ![line-height:1.25] font-bold text-gray-900 ">
                Enterprise Procedure Engineering & Management System
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg  leading-relaxed">
              Transform your business procedures into integrated digital guides
              using AI, with stakeholder engagement and regulatory compliance
            </p>

            {/* CTA Button */}
            <button className="bg-[#051C48] hover:bg-[#0f172a] text-white px-4 py-[10px]  text-sm font-medium inline-flex items-center gap-2 transition-colors ">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <img src={DashboardPreviewImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-[450px] lg:max-w-[480px] mx-auto lg:ml-auto border border-gray-100">
      {/* Header */}
      <div className="bg-[#1a3654] px-4 py-3 flex items-center gap-2">
        {/* <ProcessXLogoSmall /> */}
        <span className="text-white text-xs font-medium">ProcessX</span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Welcome Text */}
        <h3 className="text-sm font-semibold text-gray-900">
          Welcome to the Process Library & Engineering System
        </h3>

        {/* Progress Section */}
        <div className="space-y-3">
          <p className="text-xs font-medium text-gray-700">
            Procedure Customization Progress
          </p>
          <div className="grid grid-cols-3 gap-3">
            <ProgressBar
              label="Completed"
              percentage="80%"
              color="bg-green-500"
            />
            <ProgressBar
              label="Processing"
              percentage="30%"
              color="bg-yellow-400"
            />
            <ProgressBar label="Pending" percentage="16%" color="bg-red-400" />
          </div>
        </div>

        {/* Procedures Under Customization */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-700">
            Procedures Under Customization (0)
          </p>
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center min-h-[80px]">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mb-2">No projects yet</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-[10px] px-3 py-1.5 rounded-md font-medium flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Start a New Project
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div>
            <p className="text-[10px] text-gray-500 mb-1">
              Stakeholder Input Completion Rate
            </p>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">0%</p>
            <p className="text-[10px] text-gray-400">Total</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-medium mb-1">
              Recently Created Guides
            </p>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-[9px] text-gray-600 leading-snug">
                Preparing the General Administration Budget
              </p>
              <p className="text-[8px] text-gray-400 mt-0.5">Version 1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, percentage, color }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-600">{label}</span>
        <span
          className={`text-[9px] text-white px-1.5 py-0.5 rounded ${color}`}
        >
          {percentage}
        </span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: percentage }}
        ></div>
      </div>
    </div>
  );
}

function ProcessXLogoSmall() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="4"
        y="16"
        fill="#4fd1c5"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        الـ
      </text>
      <text
        x="4"
        y="30"
        fill="white"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        elm
      </text>
      <circle cx="32" cy="10" r="3" fill="#4fd1c5" />
      <circle cx="32" cy="18" r="2" fill="#4fd1c5" opacity="0.7" />
      <circle cx="36" cy="13" r="1.5" fill="#4fd1c5" opacity="0.5" />
    </svg>
  );
}

function SparkleIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function DecorativeArrow({ className }) {
  return (
    <svg
      width="116"
      height="116"
      viewBox="0 0 116 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M103.132 32.2229C94.6934 37.1368 86.2552 42.0305 77.8573 47.025C77.2733 47.3673 76.8705 48.4145 76.8101 49.1597C75.4809 66.9423 66.6802 79.8916 51.0524 88.1284C48.4545 89.4979 45.3934 90.0618 41.9899 89.7798C37.499 89.4173 34.6594 85.8527 35.1226 81.3618C35.5253 77.4347 37.499 74.2527 39.8351 71.252C45.0309 64.6264 51.576 59.4305 58.2823 54.4764C62.5316 51.3347 66.9622 48.4548 71.433 45.3534C70.3253 43.1784 67.6267 41.6277 65.2906 41.8291C60.8601 42.1916 58.7455 43.1986 55.4024 44.5277C44.9101 48.6965 35.8476 55.2215 27.8121 63.0152C21.8309 68.8152 16.2726 75.0382 10.533 81.0798C10.0295 81.6034 9.56631 82.1875 9.06284 82.6507C8.27742 83.3757 7.49201 83.6576 6.74687 83.1541C5.94131 82.7916 6.2434 81.4826 6.46492 80.7979C6.82742 79.6701 7.43159 78.5826 8.15659 77.6562C19.4545 62.9347 32.4642 50.1264 49.3406 41.8493C53.0462 40.0368 57.074 38.768 61.0816 37.7611C66.8413 36.3312 71.9364 37.5194 75.3601 43.0576C83.5566 38.6673 91.6323 34.3375 99.849 29.927C96.8281 29.927 93.9684 29.927 91.0885 29.927C90.6052 29.927 90.1219 29.9875 89.6385 29.9472C88.3295 29.8465 86.5976 30.1083 86.4767 28.2152C86.3559 26.3625 88.108 26.3423 89.2559 26.3222C95.076 26.1812 100.916 26.1007 106.736 26.2416C109.113 26.302 110.261 27.8729 109.294 30.0076C106.555 36.2104 103.514 42.3125 100.453 48.3743C100.171 48.9382 99.1441 49.8041 97.9962 49.2402C97.1503 48.7166 97.1705 47.3472 97.4323 46.6826C99.0233 42.675 100.795 38.7277 102.527 34.7604C102.83 34.0555 103.172 33.3507 103.494 32.6458C104.219 31.5583 103.796 31.8402 103.132 32.2229ZM73.1045 50.4284C73.1649 49.7034 72.0774 50.65 71.8962 50.7708C62.4108 57.0944 53.1469 63.7 45.4739 72.2187C43.4198 74.4944 41.6878 77.2132 40.4191 80.0125C38.7476 83.7382 40.8621 86.3361 44.9101 85.5909C47.5281 85.1076 50.2469 84.2416 52.5226 82.8722C62.2094 77.0923 69.9226 65.8347 71.8962 57.8395C72.6212 54.7784 72.6212 53.9326 73.1045 50.4284Z"
        fill="#0A92FF"
      />
    </svg>
  );
}

function DecorativeLines({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 35 Q 25 10, 42 28" strokeLinecap="round" />
      <path d="M14 40 Q 26 18, 38 33" strokeLinecap="round" />
      <path
        d="M32 22 L 42 28 L 36 38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HeroSection;
