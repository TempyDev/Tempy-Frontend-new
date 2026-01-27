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
          <NavLink
            to="/"
            className="text-2xl font-bold text-purple-600"
          >
            <img src={Logo} alt="" />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <DesktopDropdown />
            <DesktopLink to="/how-it-works" label="How it works" />
            <DesktopLink to="/help" label="Help" />
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
              Log in
            </button>
            <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700">
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
              <div className="ml-3 mt-2 space-y-1 border-l border-slate-200 pl-3">
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
              <button className="rounded-lg bg-purple-600 py-2 font-semibold text-white">
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
          ? "text-purple-600 font-semibold"
          : "text-slate-700 hover:text-slate-900"
      }`}
    >
      {label}
    </NavLink>
  )
}

function DesktopDropdown() {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-slate-700 hover:text-slate-900">
        Products
        <Chevron />
      </button>

      <div className="absolute left-1/2 top-full z-10 mt-3 w-44 -translate-x-1/2
        opacity-0 scale-95 pointer-events-none
        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
        transition-all duration-200
        bg-white border border-slate-200 rounded-lg shadow-lg">

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
        className="block rounded px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-purple-600 transition"
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
    <div className="rounded px-2 py-1 text-sm text-slate-600 hover:bg-slate-100 hover:text-purple-600 cursor-pointer">
      {label}
    </div>
  )
}

/* ================= ICON ================= */

function Chevron({ rotate }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${
        rotate ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
