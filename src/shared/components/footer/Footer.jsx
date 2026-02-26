import logo from "../../../assets/images/logo/logo.png";
import FooterInfoCard from "./FooterInfoCard";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterSocialLinks from "./FooterSocialLinks";
import { companyLinks, productLinks, socialLinks } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f0f10] to-[#0a0a0b] px-6 pb-8 pt-16 text-gray-300 lg:px-28">
      <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-left">
          <img src={logo} alt="Tempy logo" className="mb-4 h-10" />
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Create what you need, without complexity.
            <br />
            Simple inputs. Ready-to-use results.
          </p>
        </div>

        <div className="flex flex-col gap-16 sm:flex-row">
          <FooterLinkColumn title="Products" links={productLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />
        </div>

        <div className="space-y-4">
          <FooterInfoCard title="Trust & Transparency">
            You can create and preview documents without logging in.
          </FooterInfoCard>
          <FooterInfoCard title="Support">
            For questions or support, contact us at:
            <br />
            <a
              href="mailto:support@tempy.com"
              className="text-purple-400 hover:underline"
            >
              support@tempy.com
            </a>
          </FooterInfoCard>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-sm text-gray-500">(c) 2026 Tempy. All rights reserved.</p>
        <FooterSocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
