import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import Logo from "../../public/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm"
            : "bg-white"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <NavLink to="/" className="text-2xl font-bold text-purple-600">
            <img src={Logo} alt="logo" />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <DesktopDropdown />
            <DesktopLink to="/how-it-works" label="How it works" />
            <DesktopLink to="/help" label="Help" />
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100 transition">
              Log in
            </button>
            <button className="rounded-lg bg-[#9B21FE] px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition">
              Sign up
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3">

            <button
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium hover:bg-slate-100"
            >
              Products
              <Chevron rotate={mobileDropdown} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-3 mt-2 space-y-1 border-l border-purple-100 pl-3">
                <MobileDropdownItem label="Dashboard" />
                <MobileDropdownItem label="Settings" />
                <MobileDropdownItem label="Earnings" />
                <MobileDropdownItem label="Sign out" />
              </div>
            </div>

            <MobileLink to="/how-it-works" label="How it works" />
            <MobileLink to="/help" label="Help" />

            <div className="pt-3 flex flex-col gap-3">
              <button className="rounded-lg border border-slate-300 py-2">
                Log in
              </button>
              <button className="rounded-lg bg-[#9B21FE] py-2 font-semibold text-white">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* ================= DESKTOP ================= */

function DesktopLink({ to, label }) {
  const { pathname } = useLocation()
  const active = pathname === to

  return (
    <NavLink
      to={to}
      className={`transition ${
        active
          ? "text-[#9B21FE] font-semibold"
          : "text-slate-700 hover:text-[#9B21FE]"
      }`}
    >
      {label}
    </NavLink>
  )
}

function DesktopDropdown() {
  return (
    <div className="relative group">
      <button className="group flex items-center gap-1 text-slate-700 hover:text-[#9B21FE] font-medium transition">
        Products
        <Chevron desktop />
      </button>

      <div
        className="absolute left-1/2 top-full z-20 mt-0 w-52 -translate-x-1/2
        opacity-0 scale-95 pointer-events-none
        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
        transition-all duration-200 ease-out
        rounded-xl bg-white shadow-[0_10px_40px_rgba(155,33,254,0.15)]
        border border-purple-100"
      >
        <div className="h-1 w-full rounded-t-xl bg-gradient-to-r from-[#9B21FE] to-fuchsia-500" />

        <ul className="p-2 text-sm">
          <DropdownItem label="Dashboard" />
          <DropdownItem label="Settings" />
          <DropdownItem label="Earnings" />
          <DropdownItem label="Sign out" />
        </ul>
      </div>
    </div>
  )
}

function DropdownItem({ label }) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-purple-50 hover:text-[#9B21FE]"
      >
        {label}
      </a>
    </li>
  )
}

/* ================= MOBILE ================= */

function MobileLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className="block rounded-lg px-3 py-2 font-medium hover:bg-slate-100"
    >
      {label}
    </NavLink>
  )
}

function MobileDropdownItem({ label }) {
  return (
    <div className="rounded px-2 py-1 text-sm text-slate-600 hover:bg-purple-50 hover:text-[#9B21FE] cursor-pointer">
      {label}
    </div>
  )
}

/* ================= ICON ================= */

function Chevron({ rotate, desktop }) {
  return (
    <svg
      className={`h-4 w-4 transition-all duration-300
        ${desktop ? "group-hover:rotate-180 group-hover:text-[#9B21FE]" : ""}
        ${rotate ? "rotate-180 text-[#9B21FE]" : "text-slate-500"}
      `}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
