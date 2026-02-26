export default function FooterSocialLinks({ links }) {
  return (
    <div className="flex gap-4">
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9B21FE] text-white transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/40"
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
}
