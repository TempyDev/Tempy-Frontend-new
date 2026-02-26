import { NavLink } from "react-router-dom";
import NavbarChevron from "./NavbarChevron";
import { mainLinks, productItems } from "./navigationLinks";

export default function NavbarMobileMenu({
  isOpen,
  isDropdownOpen,
  onToggleDropdown,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="space-y-3 border-t border-slate-200 bg-white px-6 py-4 md:hidden">
      <button
        onClick={onToggleDropdown}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium hover:bg-slate-100"
      >
        Products
        <NavbarChevron rotate={isDropdownOpen} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="ml-3 mt-2 space-y-1 border-l border-purple-100 pl-3">
          {productItems.map((label) => (
            <div
              key={label}
              className="cursor-pointer rounded px-2 py-1 text-sm text-slate-600 hover:bg-purple-50 hover:text-[#9B21FE]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {mainLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="block rounded-lg px-3 py-2 font-medium hover:bg-slate-100"
        >
          {link.label}
        </NavLink>
      ))}

      <div className="flex flex-col gap-3 pt-3">
        <button className="rounded-lg border border-slate-300 py-2">Log in</button>
        <button className="rounded-lg bg-[#9B21FE] py-2 font-semibold text-white">
          Sign up
        </button>
      </div>
    </div>
  );
}
