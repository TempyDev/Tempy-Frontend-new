import React from "react";
import { motion } from "framer-motion";

import Mascot_1 from "../assets/images/mascot/mascot_1.png";
import Mascot_2 from "../assets/images/mascot/mascot_2.png";
import Mascot_3 from "../assets/images/mascot/mascot_3.png";
import Mascotbg from "../assets/images/mascot/mascot-bg.png";

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

const Home_Tempy_Work = () => {
  return (
    <section
  className="relative py-20 bg-[#FAF7F3] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${Mascotbg})` }}
>
  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          How Tempy Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-gray-500 text-lg"
        >
          Designing made effortless in 3 steps
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.img
              src={Mascot_1}
              alt="Choose"
              className="w-32 h-32 mb-6"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Choose what you want to create
            </h3>
            <p className="mt-3 text-gray-500 max-w-xs">
              Resume, Invitation, Certificate...
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.img
              src={Mascot_2}
              alt="Fill form"
              className="w-32 h-32 mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Fill a simple form
            </h3>
            <p className="mt-3 text-gray-500 max-w-xs">
              Add details, labels, and extra information if needed
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.img
              src={Mascot_3}
              alt="Generate"
              className="w-32 h-32 mb-6"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Generate & download
            </h3>
            <p className="mt-3 text-gray-500 max-w-xs">
              Get 30–50 fully formatted designs instantly
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Home_Tempy_Work;
