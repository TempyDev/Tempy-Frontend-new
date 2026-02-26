import { motion as Motion } from "framer-motion";
import mascot1 from "../../../assets/images/mascot/mascot_1.png";
import mascot2 from "../../../assets/images/mascot/mascot_2.png";
import mascot3 from "../../../assets/images/mascot/mascot_3.png";
import mascotBackground from "../../../assets/images/mascot/mascot-bg.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const steps = [
  {
    title: "Choose what you want to create",
    description: "Resume, invitation, certificate...",
    image: mascot1,
    rotate: 3,
  },
  {
    title: "Fill a simple form",
    description: "Add details, labels, and extra information if needed.",
    image: mascot2,
    rotate: -3,
  },
  {
    title: "Generate and download",
    description: "Get 30-50 fully formatted designs instantly.",
    image: mascot3,
    rotate: 3,
  },
];

export default function HowTempyWorksSection() {
  return (
    <section
      className="relative bg-[#FAF7F3] bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${mascotBackground})` }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 md:text-4xl"
        >
          How Tempy Works
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-lg text-gray-500"
        >
          Designing made effortless in 3 steps
        </Motion.p>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {steps.map((item) => (
            <Motion.div
              key={item.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <Motion.img
                src={item.image}
                alt={item.title}
                className="mb-6 h-32 w-32"
                whileHover={{ scale: 1.1, rotate: item.rotate }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 max-w-xs text-gray-500">{item.description}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
