import { FileEdit } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function FeatureCard({ item, animationVariants }) {
  const Icon = item.icon;

  return (
    <Link to={item.link || "#"} className="block">
      <Motion.div
        variants={animationVariants}
        whileHover={{
          borderColor: "#A855F7",
          scale: 1.01,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group flex cursor-pointer flex-col items-start rounded-xl border-[1.5px] border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="mb-4 text-slate-800 transition-colors group-hover:text-purple-600">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>

        <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
          {item.desc}
        </p>

        <div className="mt-4 flex items-center gap-1 text-[13px] font-bold text-purple-600">
          <span>Create now</span>
          <FileEdit size={14} className="ml-0.5" />
        </div>
      </Motion.div>
    </Link>
  );
}
