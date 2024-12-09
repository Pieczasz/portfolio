"use client";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

// Functions
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

// Types
import type { FC } from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <MaxWidthWrapper>
      <div className="mt-4 flex w-full items-center justify-between">
        <div className="text-black transition-colors duration-200 dark:text-white">
          <Image
            src="/bp_logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 dark:invert"
            priority
            onClick={() => router.push("/")}
          />
        </div>
        <Nav containerStyles="hidden md:flex font-medium" />

        <button
          onClick={toggleTheme}
          className="p-2 transition-colors hover:text-yellow-500 dark:hover:text-yellow-300"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <svg
              className="dark-mode-toggle dark h-6 w-6 animate-fade"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="dark-mode-toggle h-6 w-6 animate-fade"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
              />
            </svg>
          )}
        </button>

        <button
          onClick={() => setIsMobileNavOpen(true)}
          className="p-2 text-gray-800 hover:text-gray-600 md:hidden dark:text-gray-200 dark:hover:text-gray-400"
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
    </MaxWidthWrapper>
  );
};

export default Header;
