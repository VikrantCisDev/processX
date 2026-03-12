import { useState, useEffect, useRef } from "react";
import logo from "../assets/LogoMain.png";
import { Menu } from "lucide-react";
import { PanelLeft } from "lucide-react";

function HeaderDashboard({
  isDashboardHeader = false,
  onMenuClick,
  sidebarCollapsed,
  onToggleDesktop,
}) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`w-full bg-[#051C48] py-3 px-4  ${isDashboardHeader ? "" : "md:px-8 lg:px-16"} sticky top-0 z-20 `}>
      <div className={`${isDashboardHeader ? "" : "max-w-[1760px] mx-auto"}  flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          {isDashboardHeader && (
            <>
              {/* Mobile hamburger — visible only on mobile */}
              <button
                className="lg:hidden p-2 rounded-lg text-white"
                onClick={onMenuClick}
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>

              
            </>
          )}
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="ProcessX Logo"
              className="md:w-auto max-w-40 md:max-w-none"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center md:gap-6 gap-4">
          {/* <button className="flex items-center gap-1 text-sm text-white">
            <span className="font-medium">AR</span>
            <ChevronDown className="w-4 h-4" />
          </button> */}
          <select className="bg-transparent text-white text-sm focus:outline-none ">
            <option className="bg-white text-black">AR</option>
            <option className="bg-white text-black">En</option>
          </select>
          {/* <button className="bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 text-sm px-4 py-1.5  transition-colors font-medium shadow-sm">
            Login
          </button> */}
          <div className="w-10 h-10 rounded-full bg-white border border-[#D5DADD] flex items-center justify-center">
            {/* <img src="" alt="" className="object-cover w-full h-full" /> */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.55556 4.44444C5.55556 3.2657 6.02381 2.13524 6.8573 1.30175C7.6908 0.468252 8.82126 0 10 0C11.1787 0 12.3092 0.468252 13.1427 1.30175C13.9762 2.13524 14.4444 3.2657 14.4444 4.44444C14.4444 5.62318 13.9762 6.75365 13.1427 7.58714C12.3092 8.42064 11.1787 8.88889 10 8.88889C8.82126 8.88889 7.6908 8.42064 6.8573 7.58714C6.02381 6.75365 5.55556 5.62318 5.55556 4.44444ZM5.55556 11.1111C4.08213 11.1111 2.66905 11.6964 1.62718 12.7383C0.585316 13.7802 0 15.1932 0 16.6667C0 17.5507 0.35119 18.3986 0.976311 19.0237C1.60143 19.6488 2.44928 20 3.33333 20H16.6667C17.5507 20 18.3986 19.6488 19.0237 19.0237C19.6488 18.3986 20 17.5507 20 16.6667C20 15.1932 19.4147 13.7802 18.3728 12.7383C17.3309 11.6964 15.9179 11.1111 14.4444 11.1111H5.55556Z" fill="#006DFF"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDashboard;
