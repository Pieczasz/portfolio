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
  { path: "/contact", name: "Contact" },
];

const Nav: FC<NavProps> = ({ containerStyles, isMobile }) => {
  const path = usePathname();

  const baseClasses = {
    nav: "flex items-center gap-4",
    desktop: "h-12 rounded-2xl bg-white/80 px-8 shadow-lg backdrop-blur-sm",
    item: "relative",
    link: "relative block",
    button: "relative rounded-xl px-4 py-2",
    text: "block font-medium",
  };

  const variants = {
    nav: {
      initial: {
        opacity: 0,
        x: -20,
        scale: 0.95,
        backgroundColor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(0px)",
      },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
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
      className={`${baseClasses.nav} ${!isMobile ? "h-12 rounded-2xl px-8 shadow-lg" : ""} ${containerStyles ?? ""}`}
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
                link.path === path ? "bg-[#57A464]/10" : "hover:bg-gray-100"
              } ${isMobile ? "text-center" : ""}`}
              whileHover={{
                y: -3.5,
                scale: 1.08,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <motion.span
                className={`${baseClasses.text} ${
                  link.path === path ? "text-[#57A464]" : ""
                } ${isMobile ? "mx-auto" : ""}`}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                {link.name}
              </motion.span>
              {link.path === path && (
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-[#57A464]"
                  layoutId={isMobile ? "mobileUnderline" : "desktopUnderline"}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Nav;
