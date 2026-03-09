import { ChevronDown } from "lucide-react"
import logo from '../assets/LogoMain.png'

function Header() {
  return (
    <header className="w-full bg-[#051C48] py-3 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1760px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="ProcessX Logo" className="md:w-auto max-w-40" />
        </div>

        {/* Right side */}
        <div className="flex items-center md:gap-6 gap-4">
          <button className="flex items-center gap-1 text-sm text-white">
            <span className="font-medium">AR</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 text-sm px-4 py-1.5  transition-colors font-medium shadow-sm">
            Login
          </button>
        </div>
      </div>
    </header>
  )
  
}


export default Header
