import { NavLink, useLocation } from "react-router-dom";
import NavbarChevron from "./NavbarChevron";
import { mainLinks, productItems } from "./navigationLinks";

function DesktopLink({ to, label }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <NavLink
      to={to}
      className={`transition ${
        isActive
          ? "font-semibold text-[#9B21FE]"
          : "text-slate-700 hover:text-[#9B21FE]"
      }`}
    >
      {label}
    </NavLink>
  );
}

function ProductDropdown() {
  return (
    <div className="group relative">
      <button className="group flex items-center gap-1 font-medium text-slate-700 transition hover:text-[#9B21FE]">
        Products
        <NavbarChevron desktop />
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-0 w-52 -translate-x-1/2 scale-95 rounded-xl border border-purple-100 bg-white opacity-0 shadow-[0_10px_40px_rgba(155,33,254,0.15)] transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
        <div className="h-1 w-full rounded-t-xl bg-gradient-to-r from-[#9B21FE] to-fuchsia-500" />

        <ul className="p-2 text-sm">
          {productItems.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-purple-50 hover:text-[#9B21FE]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function NavbarDesktopMenu() {
  return (
    <>
      <div className="hidden items-center gap-8 text-sm font-medium md:flex">
        <ProductDropdown />
        {mainLinks.map((link) => (
          <DesktopLink key={link.to} to={link.to} label={link.label} />
        ))}
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm transition hover:bg-slate-100">
          Log in
        </button>
        <button className="rounded-lg bg-[#9B21FE] px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700">
          Sign up
        </button>
      </div>
    </>
  );
}
