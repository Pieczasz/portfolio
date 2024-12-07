"use client";

// Framer Motion
import { motion } from "framer-motion";

const Education = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.35,
        ease: [0.2, 1, 0.4, 1],
        staggerChildren: 0.1,
      },
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className="my-16"
    >
      <motion.h2 variants={variants} className="mb-8 text-4xl font-bold">
        Education
      </motion.h2>
      <motion.div variants={variants} className="space-y-6">
        <div className="rounded-lg border p-6">
          <h3 className="text-2xl font-semibold">
            Technical High School No. 1 in Gliwice (ZSTI)
          </h3>
          <p className="text-gray-600">Sep 2020 - April 2025</p>
          <p className="mt-2 font-medium">
            Technical High School Diploma – IT Technician (Technik Informatyk)
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Ranked among top 25 technical schools in Poland and 2nd in
              Silesian region
            </li>
            <li>
              Maintained average above 4.0, including 4.76 in penultimate year
            </li>
            <li>Passed INF 02 professional exam in Networking and Servers</li>
            <li>Preparing for INF 03 Programming exam in January</li>
            <li>
              Specialized in network administration, server management, and
              application programming
            </li>
            <li>
              Taking matura exam in May with extended Mathematics and English
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
