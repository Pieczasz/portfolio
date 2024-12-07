"use client";

// Framer motion
import { motion } from "framer-motion";

const Internship = () => {
  const variants = {
    component: {
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
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants.component}
      className="my-[4rem] flex max-w-5xl flex-col gap-y-4 px-4 md:my-[7.5rem] md:gap-y-6 md:px-0"
    >
      <div className="flex w-full items-start">
        <motion.h2
          variants={variants.item}
          className="w-full text-center text-3xl font-bold text-[#57A464] md:text-left md:text-4xl"
        >
          Internships
        </motion.h2>
      </div>
      <div className="space-y-6 md:space-y-8">
        <motion.div
          variants={variants.component}
          className="rounded-lg border p-4 md:p-6"
        >
          <h3 className="text-lg font-semibold md:text-xl">
            Network Administrator
          </h3>
          <p className="text-sm text-gray-600 md:text-base">
            WASKO S.A. | March 2023 - March 2023 | April 2024 - May 2024
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Installed, configured, and maintained servers, routers, firewalls,
              and network devices
            </li>
            <li>Troubleshot network problems and resolved technical issues</li>
            <li>Designed and implemented secure network architecture</li>
          </ul>
        </motion.div>

        <motion.div
          variants={variants.component}
          className="rounded-lg border p-4 md:p-6"
        >
          <h3 className="text-lg font-semibold md:text-xl">
            Computer Hardware Technician Intern - Faro, Portugal (Erasmus+)
          </h3>
          <p className="text-sm text-gray-600 md:text-base">
            May 2023 - May 2023 | International Internship - Erasmus+ Program
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Installed and configured computer hardware, software, systems, and
              networks
            </li>
            <li>
              Developed and maintained secure network and computer systems
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Internship;
