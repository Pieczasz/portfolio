"use client";
// Components
import Link from "next/link";

// Functions
import { usePathname } from "next/navigation";

// Framer motion
import { motion } from "framer-motion";

// Types
import type { FC } from "react";

// Interfaces
interface NavLink {
  path: string;
  name: string;
}

interface NavProps {
  containerStyles?: string;
  isMobile?: boolean;
}

const links: NavLink[] = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/about", name: "About Me" },
  { path: "/resume", name: "Resume" },
];

const Nav: FC<NavProps> = ({ containerStyles, isMobile }) => {
  const path = usePathname();

  const baseClasses = {
    nav: "flex items-center gap-4",
    desktop:
      "h-12 rounded-2xl bg-white/80 dark:bg-black/40 px-8 shadow-lg backdrop-blur-sm",
    item: "relative",
    link: "relative block",
    button: "relative rounded-xl px-4 py-2",
    text: "block font-medium text-gray-800 dark:text-gray-100",
  };

  const variants = {
    nav: {
      initial: {
        opacity: 0,
        x: -20,
        scale: 0.95,
      },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    },
    item: {
      initial: {
        opacity: 0,
        x: -20,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
        },
      },
    },
  };

  return (
    <motion.nav
      variants={variants.nav}
      initial="initial"
      animate="animate"
      className={`${baseClasses.nav} ${
        !isMobile
          ? "h-12 rounded-2xl bg-white/80 px-8 shadow-lg backdrop-blur-md transition-colors duration-300 dark:bg-black/40 dark:shadow-black/50"
          : ""
      } ${containerStyles ?? ""}`}
    >
      {links.map((link, index) => (
        <motion.div
          key={index}
          variants={variants.item}
          className={`${baseClasses.item} ${isMobile ? "w-full" : ""}`}
        >
          <Link href={link.path} className={baseClasses.link}>
            <motion.div
              className={`${baseClasses.button} ${
                link.path === path
                  ? "bg-[#57A464]/[0.13] dark:bg-[#57A464]/30"
                  : "hover:bg-slate-100 dark:hover:bg-gray-800"
              } ${isMobile ? "text-center" : ""}`}
              whileHover={{
                y: -3.5,
                scale: 1.08,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <motion.span
                className={`${baseClasses.text} ${
                  link.path === path ? "text-[#57A464] dark:text-[#68bf77]" : ""
                } ${isMobile ? "mx-auto" : ""}`}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                {link.name}
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Nav;
