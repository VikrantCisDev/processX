import FooterLogo from "../assets/footerLogo.png";
import FooterLogoShort from "../assets/FooterLogoShort.png";

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

export default Footer
