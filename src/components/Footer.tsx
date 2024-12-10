"use client";

// Components
import Link from "next/link";

// Framer motion
import { motion } from "framer-motion";

// Types
import type { FC } from "react";

// Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const Footer: FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto flex max-w-5xl flex-col space-y-6 px-4 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-6"
    >
      <motion.h4
        variants={childVariants}
        className="text-xl font-semibold text-black sm:text-2xl dark:text-white"
      >
        Piekarz 2024 &copy;
      </motion.h4>

      <motion.div
        variants={childVariants}
        className="flex flex-wrap gap-4 sm:flex-row sm:gap-x-6"
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 text-black transition-colors hover:text-[#57A464] dark:text-white"
        >
          <FaLinkedin size={20} className="sm:h-6 sm:w-6" />
          <span className="text-sm text-black sm:text-base dark:text-white">
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/Pieczasz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01b14ac855ff93d122"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <SiUpwork size={24} />
          <span>Upwork</span>
        </a>
        <a
          href="https://www.fiverr.com/pieczasz/buying?source=avatar_menu_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <TbBrandFiverr size={24} />
          <span>Fiverr</span>
        </a>
      </motion.div>

      <motion.div variants={childVariants} className="flex flex-col gap-y-2">
        <Link
          href="mailto:bartekp854@gmail.com"
          className="group flex items-center"
        >
          <span className="text-2xl font-semibold text-black transition-colors group-hover:text-[#57A464] dark:text-white">
            Contact Me
          </span>
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-6 w-6 fill-none stroke-black stroke-[3px] transition-all duration-300 ease-in-out dark:stroke-white"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            />
          </svg>
        </Link>
        <Link href="/projects" className="group flex items-center">
          <span className="text-2xl font-semibold text-black transition-colors group-hover:text-[#57A464] dark:text-white">
            My Projects
          </span>
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-6 w-6 fill-none stroke-black stroke-[3px] transition-all duration-300 ease-in-out dark:stroke-white"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
