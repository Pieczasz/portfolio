"use client";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

// Functions
import { useState } from "react";

// Types
import type { FC } from "react";

const Header: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="mt-4 flex w-full items-center justify-center">
      <Nav containerStyles="hidden md:flex font-medium" />

      <button
        onClick={() => setIsMobileNavOpen(true)}
        className="p-2 md:hidden"
      >
        <span className="sr-only">Open menu</span>
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </div>
  );
};

export default Header;
