export default function NavbarChevron({ rotate = false, desktop = false }) {
  return (
    <svg
      className={`h-4 w-4 transition-all duration-300 ${
        desktop ? "group-hover:rotate-180 group-hover:text-[#9B21FE]" : ""
      } ${rotate ? "rotate-180 text-[#9B21FE]" : "text-slate-500"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
