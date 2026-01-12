import { motion } from "framer-motion";

const items = [
  {
    title: "Resume & Career",
    desc: "Create clean, professional resumes by filling in simple details.",
  },
  {
    title: "Marriage Biodata",
    desc: "Generate traditional or modern marriage biodata in minutes.",
  },
  {
    title: "Invitations",
    desc: "Create invitations for life’s important events without design work.",
  },
  {
    title: "Funeral Notice",
    desc: "Create respectful and clear funeral or condolence notices.",
  },
  {
    title: "Business Documents",
    desc: "Create simple business documents for daily shop and work needs.",
  },
  {
    title: "Visiting Card",
    desc: "Create simple & professional visiting cards for personal or business use.",
  },
  {
    title: "Certificates",
    desc: "Generate simple certificates with correct format and layout.",
  },
  {
    title: "Social Media Content",
    desc: "Create ready-to-use content for social platforms in minutes.",
  },
  {
    title: "Greetings & Messages",
    desc: "Create thoughtful greeting & thank-you messages for any occasion.",
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
    <section className=" py-20 font-inter">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            What can you create with Tempy?
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose what you need. We'll take care of the format
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
