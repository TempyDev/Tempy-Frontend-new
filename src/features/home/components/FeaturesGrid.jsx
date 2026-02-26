import { motion as Motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { featureItems } from "./featureItems";

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
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
        <Motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featureItems.map((item) => (
            <FeatureCard
              key={item.title}
              item={item}
              animationVariants={cardVariants}
            />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
