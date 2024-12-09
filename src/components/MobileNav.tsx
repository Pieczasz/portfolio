"use client";

// Components
import Nav from "./Nav";

// Framer motion
import { motion } from "framer-motion";

// Types
import type { FC } from "react";

// Interfaces
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-0 z-50 h-screen w-[300px] bg-white/90 shadow-lg backdrop-blur-lg dark:bg-black/90 dark:shadow-black/50"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
      >
        <span className="sr-only">Close menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="mt-16 px-4">
        <Nav containerStyles="flex flex-col space-y-4" isMobile={true} />
      </div>
    </motion.div>
  );
};

export default MobileNav;
