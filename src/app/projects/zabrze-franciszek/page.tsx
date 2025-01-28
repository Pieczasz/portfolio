"use client";

import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2, X, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiReact,
  SiZod,
  SiNextdotjs,
  SiShadcnui,
  SiVercel,
  SiPrisma,
} from "react-icons/si";

const ZabrzeFranciszekPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedImage]);

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
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const listAnimationVariants = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const screenshots = [
    "/zabrze-franciszek/zabrze_franciszek_page.jpg",
    "/zabrze-franciszek/zabrze_franciszek_posts.jpg",
    "/zabrze-franciszek/zabrze_franciszek_post_creation.jpg",
    "/zabrze-franciszek/zabrze_franciszek_users.jpg",
  ];

  const techStack = [
    {
      label: "Frontend",
      stack: "Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui",
      icons: [
        { icon: SiNextdotjs, color: "text-black dark:text-white" },
        { icon: SiReact, color: "text-blue-400" },
        { icon: SiTypescript, color: "text-blue-600" },
        { icon: SiTailwindcss, color: "text-cyan-500" },
        { icon: SiShadcnui, color: "text-black dark:text-white" },
      ],
    },
    {
      label: "Backend",
      stack:
        "Next.js API routes, Zod, Prisma, PostgreSQL (On serverless neon.tech), Vercel",
      icons: [
        { icon: SiNextdotjs, color: "text-black dark:text-white" },
        { icon: SiZod, color: "text-blue-800" },
        { icon: SiPrisma, color: "text-slate-800" },
        { icon: SiPostgresql, color: "text-slate-800 dark:text-slate-300" },
        { icon: SiVercel, color: "text-black dark:text-white" },
      ],
    },
  ];

  return (
    <MaxWidthWrapper>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="px-4 py-16 lg:px-0"
      >
        <motion.div variants={variants} className="flex items-center gap-4">
          <Image
            src="/zabrze_franciszek_logo.svg"
            alt="Zabrze Franciszek Logo"
            width={64}
            height={64}
            className="rounded-lg bg-white p-2 dark:bg-gray-300"
          />
          <motion.h1
            variants={variants}
            className="text-4xl font-bold text-black lg:text-5xl dark:text-white"
          >
            Zabrze Franciszek
          </motion.h1>
        </motion.div>

        <motion.div variants={variants} className="mt-16 flex gap-4">
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link
              href="https://franciszek.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-[#303030] px-4 py-2 text-white transition-colors hover:bg-black"
            >
              <Link2 size={20} />
              <span>Visit Website</span>
            </Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={(e) => {
              e.preventDefault();
              const lockElement = e.currentTarget.querySelector(".lock-icon");
              if (lockElement) {
                const motionLock = lockElement as HTMLElement;
                motionLock.style.transform = "rotate(0deg)";
                motionLock.animate(
                  [
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(-10deg)" },
                    { transform: "rotate(10deg)" },
                    { transform: "rotate(-10deg)" },
                    { transform: "rotate(10deg)" },
                    { transform: "rotate(0deg)" },
                  ],
                  {
                    duration: 500,
                    easing: "ease-in-out",
                  },
                );
              }
            }}
          >
            <Link
              href="https://github.com/Pieczasz/franciszek-zabrze"
              target="_blank"
              className="flex items-center gap-2 rounded-lg border border-gray-400 px-4 py-2 text-gray-600 transition-colors hover:border-gray-600 hover:text-gray-800 dark:hover:border-gray-300 dark:hover:text-gray-300"
            >
              <Github size={20} />
              <span>Source</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.section variants={variants} className="mt-16 space-y-4">
          <motion.h2
            variants={variants}
            className="text-3xl font-bold text-[#303030] lg:text-4xl"
          >
            Project overview
          </motion.h2>
          <motion.p variants={variants} className="text-lg dark:text-gray-200">
            Zabrze-Franciszek is a website for my local church parish in Zabrze.
            The website is a simple CMS system that allows priests to create,
            edit, and delete posts. They can also add and manage user accounts
            with different roles and permissions. For example charity members.
            And they can edit their own subpages.
          </motion.p>
        </motion.section>

        <motion.section className="mt-16 space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {screenshots.map((src, index) => (
              <motion.div
                key={index}
                variants={variants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(src)}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
              >
                <Image
                  src={src}
                  alt={`Zabrze Franciszek Screenshot ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Key Features section */}
        <motion.section className="mt-16 space-y-4">
          <motion.h2 className="text-3xl font-semibold text-[#303030]">
            Key Features
          </motion.h2>
          <ul className="list-inside list-disc space-y-2 text-lg">
            {[
              "Creating, editing, and deleting posts",
              "Creating and managing user accounts roles and permissions",
              "All of the websites are editable for admin users",
              "Accessability and minimalisttic, responsive design",
            ].map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listAnimationVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-50px" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section variants={variants} className="mt-16 space-y-4">
          <motion.h2
            variants={variants}
            className="text-3xl font-semibold text-[#303030]"
          >
            Tech Stack
          </motion.h2>
          <motion.div
            variants={techStackVariants}
            className="grid gap-4 sm:grid-cols-2"
          >
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="rounded-lg border border-gray-200 p-4 shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800/50"
              >
                <h3 className="mb-2 font-semibold dark:text-white">
                  {category.label}
                </h3>
                <div className="flex items-center gap-2">
                  {category.icons.map((Icon, iconIndex) => (
                    <Icon.icon
                      key={iconIndex}
                      className={`h-6 w-6 ${Icon.color} dark:opacity-90`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {category.stack}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#303030]/80 p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative h-auto max-h-[90vh] w-auto max-w-[90vw]"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute -right-4 -top-4 z-50 rounded-full bg-white p-2 dark:bg-gray-900"
                >
                  <X className="h-6 w-6" />
                </button>
                <Image
                  src={selectedImage}
                  alt="Screenshot"
                  width={1920}
                  height={1080}
                  className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default ZabrzeFranciszekPage;
