import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Library,
  FolderOpen,
  Settings2,
  BarChart2,
  FileStack,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Bell,
  ChevronDown,
  LogOut,
  User,
} from 'lucide-react'
import logo from "../assets/LogoMain.png";
import Header from './Header'
import Footer from './Footer'
import HeaderDashboard from './HeaderDashboard'
import { PanelLeft } from 'lucide-react';


const DashboardIcon = ({className}) =>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M6.133 21C4.955 21 4 20.02 4 18.81V10.008C4 9.34297 4.295 8.71297 4.8 8.29797L10.667 3.47997C11.0419 3.16955 11.5133 2.99969 12 2.99969C12.4867 2.99969 12.9581 3.16955 13.333 3.47997L19.199 8.29797C19.705 8.71297 20 9.34297 20 10.008V18.81C20 20.02 19.045 21 17.867 21H6.133Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 21V15.5C9.5 14.9696 9.71071 14.4609 10.0858 14.0858C10.4609 13.7107 10.9696 13.5 11.5 13.5H12.5C13.0304 13.5 13.5391 13.7107 13.9142 14.0858C14.2893 14.4609 14.5 14.9696 14.5 15.5V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const ProcessTemplateIcon = ({className}) =>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M8.25 20.25H2.25C1.85218 20.25 1.47064 20.092 1.18934 19.8107C0.908035 19.5294 0.75 19.1478 0.75 18.75V2.25C0.75 1.85218 0.908035 1.47064 1.18934 1.18934C1.47064 0.908035 1.85218 0.75 2.25 0.75H12.879C13.2765 0.750085 13.6578 0.907982 13.939 1.189L16.811 4.061C17.092 4.3422 17.2499 4.72345 17.25 5.121V8.25M22.63 14.87L15 22.5L11.25 23.25L12 19.5L19.63 11.87C19.8261 11.6729 20.0592 11.5164 20.3159 11.4097C20.5727 11.3029 20.848 11.248 21.126 11.248C21.404 11.248 21.6793 11.3029 21.9361 11.4097C22.1928 11.5164 22.4259 11.6729 22.622 11.87L22.63 11.878C22.8271 12.0741 22.9836 12.3072 23.0903 12.5639C23.1971 12.8207 23.252 13.096 23.252 13.374C23.252 13.652 23.1971 13.9273 23.0903 14.1841C22.9836 14.4408 22.8271 14.6739 22.63 14.87Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

</svg>
)

const ProcessLibraryIcon = ({className}) =>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7 17V13M12 17V7M17 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2.5 12C2.5 7.522 2.5 5.282 3.891 3.891C5.282 2.5 7.521 2.5 12 2.5C16.478 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.282 21.5 3.891 20.109C2.5 18.718 2.5 16.479 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
)

const ImpactAnalysisIcon = ({className})=>(
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M2.625 1.875V21.375H22.125V22.125H3C2.70163 22.125 2.41508 22.0069 2.2041 21.7959C1.99312 21.5849 1.875 21.2984 1.875 21V1.875H2.625Z" fill="currentColor" stroke="currentColor" stroke-width="0.75"/>
<path d="M22.5 6.75H17.25V8.25H19.9425L14.25 13.9425L11.0325 10.7175C10.9628 10.6472 10.8798 10.5914 10.7884 10.5533C10.697 10.5153 10.599 10.4957 10.5 10.4957C10.401 10.4957 10.303 10.5153 10.2116 10.5533C10.1202 10.5914 10.0372 10.6472 9.9675 10.7175L4.5 16.1925L5.5575 17.25L10.5 12.3075L13.7175 15.5325C13.7872 15.6028 13.8702 15.6586 13.9616 15.6967C14.053 15.7347 14.151 15.7543 14.25 15.7543C14.349 15.7543 14.447 15.7347 14.5384 15.6967C14.6298 15.6586 14.7128 15.6028 14.7825 15.5325L21 9.3075V12H22.5V6.75Z" fill="currentColor"/>
</svg>
)

const MyProjectsIcon = ({className})=> (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M18.0001 10.0003H13.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.0001 3.00012H16.5001C16.9641 3.00012 17.1971 3.00012 17.3921 3.02612C18.0466 3.11244 18.6543 3.41224 19.1212 3.87905C19.588 4.34586 19.8878 4.95362 19.9741 5.60812C20.0001 5.80312 20.0001 6.03612 20.0001 6.50012" stroke="currentColor" stroke-width="1.5"/>
<path d="M2.00003 6.95012C2.00003 6.06712 2.00003 5.62612 2.07003 5.25812C2.21925 4.46796 2.60317 3.74112 3.17168 3.17243C3.7402 2.60373 4.46692 2.21959 5.25703 2.07012C5.62603 2.00012 6.06803 2.00012 6.95003 2.00012C7.33603 2.00012 7.53003 2.00012 7.71603 2.01712C8.51708 2.09235 9.27682 2.4074 9.89603 2.92112C10.04 3.04012 10.176 3.17612 10.45 3.45012L11 4.00012C11.816 4.81612 12.224 5.22412 12.712 5.49512C12.9802 5.64462 13.2648 5.76273 13.56 5.84712C14.098 6.00012 14.675 6.00012 15.828 6.00012H16.202C18.834 6.00012 20.151 6.00012 21.006 6.77012C21.0854 6.84012 21.16 6.91479 21.23 6.99412C22 7.84912 22 9.16612 22 11.7981V14.0001C22 17.7711 22 19.6571 20.828 20.8281C19.656 21.9991 17.771 22.0001 14 22.0001H10C6.22903 22.0001 4.34303 22.0001 3.17203 20.8281C2.00103 19.6561 2.00003 17.7711 2.00003 14.0001V6.95012Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
)

const ProcessManagementIcon = ({className})=> (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C22 4.93 22 7.286 22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 9H18M13 16H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
)

/* ─── Navigation items ─── */
const NAV_ITEMS = [
  { label: 'Dashboard',                   icon: DashboardIcon, to: '/dashboard' },
  { label: 'Process Library',             icon: ProcessLibraryIcon,         to: '/process-library' },
  { label: 'My Projects',                 icon: MyProjectsIcon,      to: '/my-projects' },
  { label: 'Process Management',          icon: ProcessManagementIcon,       to: '/process-management' },
  { label: 'Impact Analysis',             icon: ImpactAnalysisIcon,       to: '/impact-analysis' },
  { label: 'Procedure Template Management', icon: ProcessTemplateIcon,     to: '/procedure-templates' },
]

/* ─── Single nav link ─── */
const SidebarLink = ({ item, collapsed, onClick }) => {
  const Icon = item.icon

  return (
    <NavLink
      to={item.to}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        [
          'group flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-all duration-200 group',
          isActive
            ? 'bg-[#0A92FF] text-white '
            : 'text-[#1D1D1D] hover:bg-[#0A92FF] hover:text-white',
          collapsed ? 'justify-center' : '',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={18}
            className={[
              'flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-white',
              isActive
                ? 'text-white' 
                : 'text-[#0A92FF]',
            ].join(' ')}
          />
          {!collapsed && (
            <span className="truncate leading-tight">{item.label}</span>
          )}
        </>
      )}
    </NavLink>
  )
}

/* ─── Sidebar inner content (shared between desktop & mobile) ─── */
const SidebarContent = ({ collapsed, onLinkClick }) => (
  <nav className="flex flex-col gap-1 px-4 md:pb-10 mt-4 pb-6 flex-1 overflow-y-auto">
    {NAV_ITEMS.map((item) => (
      <SidebarLink
        key={item.to}
        item={item}
        collapsed={collapsed}
        onClick={onLinkClick}
      />
    ))}
  </nav>
)



/* ════════════════════════════════════════════════
   Main DashboardLayout
════════════════════════════════════════════════ */
const DashboardLayout = ({ children }) => {
  /* Desktop: collapsed (icon-only) vs expanded (icon+text) */
  const [desktopCollapsed, setDesktopCollapsed] = useState(false)

  /* Mobile: off-canvas open / closed */
  const [mobileOpen, setMobileOpen] = useState(false)

  const location = useLocation()

  /* Close mobile nav on route change */
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  /* Prevent body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const SIDEBAR_BG = 'bg-white'

  return (
    <>
    <HeaderDashboard
    isDashboardHeader={true}
          onMenuClick={() => setMobileOpen(true)}
          sidebarCollapsed={desktopCollapsed}
          onToggleDesktop={() => setDesktopCollapsed((v) => !v)}
        />
    <div className="flex h-screen overflow-hidden bg-[#f6f7f9] font-sans">

      {/* ── DESKTOP SIDEBAR ──────────────────────────────── */}
      {/* Hidden on mobile (md:flex) */}
      <aside
        className={[
          'hidden lg:flex flex-col flex-shrink-0 h-full transition-all duration-300 ease-in-out shadow-form',
          SIDEBAR_BG,
          desktopCollapsed ? 'w-[64px]' : 'w-[312px]',
        ].join(' ')}
      >
        <div className="flex items-center justify-end pt-4 px-2">
          {/* Desktop collapse toggle — hidden on mobile */}
          <button
            className="hidden lg:flex p-2 rounded-lg text-[#0A92FF] transition-colors"
            onClick={() => setDesktopCollapsed((v) => !v)}
            aria-label={
              desktopCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            <PanelLeft />
          </button>
        </div>
        <SidebarContent collapsed={desktopCollapsed} />
      </aside>

      {/* ── MOBILE OFF-CANVAS SIDEBAR ────────────────────── */}
      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 flex items-start justify-end',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      >
        <button
            onClick={() => setMobileOpen(false)}
            className="p-4 rounded-lg text-white hover:bg-white/10 transition-colors "
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
      </div>

      {/* Drawer panel */}
      <aside
        className={[
          'fixed top-0 left-0 h-full z-50 flex flex-col lg:hidden transition-transform duration-300 ease-in-out',
          SIDEBAR_BG,
          'w-[260px]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/10 flex-shrink-0 bg-[#051C48]">
          {/* Logo */}
                    <div className="flex items-center gap-2">
                      <img
                        src={logo}
                        alt="ProcessX Logo"
                        className="md:w-auto max-w-40 md:max-w-none"
                      />
                    </div>
          
        </div>

        {/* Nav links — never collapsed on mobile */}
        <SidebarContent collapsed={false} onLinkClick={() => setMobileOpen(false)} />
      </aside>

      {/* ── MAIN CONTENT AREA ───────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 xl:p-10 py-6 px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default DashboardLayout
