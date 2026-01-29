import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f10] to-[#0a0a0b] text-gray-300 pt-16 pb-8 px-6 lg:px-28">
      
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/10 pb-12">

        {/* LOGO + TAGLINE */}
        <div className="text-left">
          <img src={logo} alt="logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Create what you need, without complexity. <br />
            Simple inputs. Ready-to-use results.
          </p>
        </div>

        {/* PRODUCTS + COMPANY */}
        <div className="flex flex-col sm:flex-row gap-16">

          {/* PRODUCTS */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-[14px] text-sm text-[#999999]">
              {[
                "Resume & Career",
                "Marriage Biodata",
                "Invitations",
                "Visiting Card",
                "Business Documents",
                "Certificates",
                "Funeral Notice",
                "Greetings & Messages",
                "Social Media Content",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="/"
                    className="relative group inline-block hover:text-purple-400 transition"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-[14px] text-sm text-[#999999]">
              {[
                { name: "About Tempy", link: "/about" },
                { name: "Help", link: "/help" },
                { name: "Contact", link: "/contact" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Terms of Use", link: "/terms" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="relative group inline-block hover:text-purple-400 transition"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-purple-500/40 transition">
            <h4 className="text-white font-medium mb-2">Trust & Transparency</h4>
            <p className="text-sm text-gray-400">
              You can create and preview documents without logging in.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-purple-500/40 transition">
            <h4 className="text-white font-medium mb-2">Support</h4>
            <p className="text-sm text-gray-400">
              For questions or support, contact us at:
              <br />
              <a
                href="mailto:support@tempy.com"
                className="text-purple-400 hover:underline"
              >
                support@tempy.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8">
        <p className="text-sm text-gray-500">
          © 2026 Tempy. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          {[
            { icon: FaFacebookF, link: "https://facebook.com" },
            { icon: FaInstagram, link: "https://instagram.com" },
            { icon: FaTwitter, link: "https://twitter.com" },
            { icon: FaLinkedinIn, link: "https://linkedin.com" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9B21FE] text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-600/40 transition duration-300"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
