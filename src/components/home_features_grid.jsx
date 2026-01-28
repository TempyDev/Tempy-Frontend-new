import { motion } from "framer-motion";
import { 
  FileEdit, Contact, Mail, UserPlus, 
  Briefcase, IdCard, Award, Image, Gift 
} from "lucide-react";
const items = [
  {
    title: "Resume & Career",
    desc: "Create clean, professional resumes by filling in simple details.",
    icon: <FileEdit size={28} strokeWidth={1.5} />,
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
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                borderColor: "#A855F7", // Purple-500 matching Figma
                scale: 1.01,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group flex flex-col items-start rounded-xl border-[1.5px] border-slate-100 bg-white p-8 shadow-sm cursor-pointer transition-shadow hover:shadow-md"
            >
              {/* Icon - Styled per Figma screenshot */}
              <div className="mb-4 text-slate-800 group-hover:text-purple-600 transition-colors">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                {item.desc}
              </p>

              <div className="mt-4 flex items-center gap-1 text-[13px] font-bold text-purple-600">
                <span>Create now</span>
                <FileEdit size={14} className="ml-0.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
