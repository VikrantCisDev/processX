import FooterLogo from "../assets/footerLogo.png";
import FooterLogoShort from "../assets/footerLogoShort.png";

function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] py-5 px-4 md:px-8 lg:px-16 font-[Roboto]">
      <div className="max-w-[1760px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Logos */}
        <div className="flex items-center gap-4">
          <img src={FooterLogoShort} alt="Footer Logo" />
        </div>

        {/* Center - Copyright */}
        <div className="text-gray-400 text-xs md:text-sm text-center font-medium">
          All rights reserved © 2026 - ProcessX
        </div>

        {/* Right - Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors font-medium">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors font-medium">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

function ElmLogo() {
  return (
    <svg className="h-10 w-auto" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="14" fill="#4fd1c5" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">الـ</text>
      <text x="0" y="30" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">elm</text>
      <circle cx="45" cy="10" r="4" fill="#4fd1c5"/>
      <circle cx="45" cy="22" r="3" fill="#4fd1c5" opacity="0.7"/>
      <circle cx="54" cy="14" r="2" fill="#4fd1c5" opacity="0.5"/>
    </svg>
  )
}

function JMMInnovationsLogo() {
  return (
    <div className="flex items-center">
      <span className="text-white font-bold text-lg tracking-tight">JMM</span>
      <div className="flex flex-col ml-1">
        <span className="text-gray-400 text-[7px] leading-none tracking-[0.15em]">INNOVATIONS</span>
      </div>
    </div>
  )
}

export default Footer
