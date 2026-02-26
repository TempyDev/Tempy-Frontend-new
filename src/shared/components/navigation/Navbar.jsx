import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import NavbarDesktopMenu from "./NavbarDesktopMenu";
import NavbarMobileMenu from "./NavbarMobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur"
            : "bg-white"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <NavLink to="/" className="text-2xl font-bold text-purple-600">
            <img src={logo} alt="Tempy logo" className="h-8 w-auto" />
          </NavLink>

          <NavbarDesktopMenu />

          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="text-sm font-semibold uppercase tracking-wide md:hidden"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </nav>

        <NavbarMobileMenu
          isOpen={isMobileOpen}
          isDropdownOpen={isMobileDropdownOpen}
          onToggleDropdown={() => setIsMobileDropdownOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}
