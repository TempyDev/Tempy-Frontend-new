export default function FooterLinkColumn({ title, links }) {
  return (
    <div className="text-left">
      <h3 className="mb-4 font-semibold text-white">{title}</h3>
      <ul className="space-y-[14px] text-sm text-[#999999]">
        {links.map((item) => {
          const label = typeof item === "string" ? item : item.name;
          const href = typeof item === "string" ? "/" : item.link;

          return (
            <li key={label}>
              <a
                href={href}
                className="group relative inline-block transition hover:text-purple-400"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
