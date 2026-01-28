import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Resume & Career",
    desc: "Create clean, professional resumes by filling in simple details.",
    link: "/resume-builder",
  },
  {
    title: "Marriage Biodata",
    desc: "Generate traditional or modern marriage biodata in minutes.",
    icon: <Contact size={28} strokeWidth={1.5} />,
  },
  {
    title: "Invitations",
    desc: "Create invitations for life’s important events without design work.",
    icon: <Mail size={28} strokeWidth={1.5} />,
  },
  {
    title: "Funeral Notice",
    desc: "Create respectful and clear funeral or condolence notices.",
    icon: <UserPlus size={28} strokeWidth={1.5} />,
  },
  {
    title: "Business Documents",
    desc: "Create simple business documents for daily shop and work needs.",
    icon: <Briefcase size={28} strokeWidth={1.5} />,
  },
  {
    title: "Visiting Card",
    desc: "Create simple & professional visiting cards for personal or business use.",
    icon: <IdCard size={28} strokeWidth={1.5} />,
  },
  {
    title: "Certificates",
    desc: "Generate simple certificates with correct format and layout.",
    icon: <Award size={28} strokeWidth={1.5} />,
  },
  {
    title: "Social Media Content",
    desc: "Create ready-to-use content for social platforms in minutes.",
    icon: <Image size={28} strokeWidth={1.5} />,
  },
  {
    title: "Greetings & Messages",
    desc: "Create thoughtful greeting & thank-you messages for any occasion.",
    icon: <Gift size={28} strokeWidth={1.5} />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function FeaturesGrid() {
  return (
   <section className="py-12 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
            <Link key={i} to={item.link} className="block">
              <motion.div
                key={i}
                variants={card}
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 30px rgba(155,33,254,0.25)",
                  borderColor: "#9B21FE",
                }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition cursor-pointer"
              >
                {/* Icon placeholder */}
                <div className="mb-4 h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center">
                  📄
                </div>

                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-4 text-sm font-medium text-purple-600 hover:underline">
                  Create now ↗
                </button>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
