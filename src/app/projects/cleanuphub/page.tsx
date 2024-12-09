"use client";

import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiTrpc,
  SiShadcnui,
  SiDrizzle,
  SiHeroku,
  SiReact,
  SiFigma,
  SiStripe,
  SiZod,
} from "react-icons/si";

const CleanupHubPage = () => {
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
    "/cleanuphub/cleanuphub_map.jpg",
    "/cleanuphub/cleanuphub_event_creation.jpg",
    "/cleanuphub/cleanuphub_event_page.jpg",
    "/cleanuphub/cleanuphub_profile.jpg",
  ];

  const techStack = [
    {
      label: "Frontend",
      stack: "Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui, Figma",
      icons: [
        { icon: SiNextdotjs, color: "text-black" },
        { icon: SiReact, color: "text-blue-400" },
        { icon: SiTypescript, color: "text-blue-600" },
        { icon: SiTailwindcss, color: "text-cyan-500" },
        { icon: SiShadcnui, color: "text-black" },
        { icon: SiFigma, color: "text-purple-500" },
      ],
    },
    {
      label: "Backend",
      stack:
        "Next.js API routes, Zod, Supabase, Drizzle, PostgreSQL, tRPC, Heroku, Stripe, NextAuth",
      icons: [
        { icon: SiNextdotjs, color: "text-black" },
        { icon: SiZod, color: "text-blue-800" },
        { icon: SiSupabase, color: "text-green-600" },
        { icon: SiDrizzle, color: "text-green-400" },
        { icon: SiPostgresql, color: "text-slate-800" },
        { icon: SiTrpc, color: "text-blue-600" },
        { icon: SiHeroku, color: "text-purple-600" },
        { icon: SiStripe, color: "text-blue-600" },
      ],
    },
  ];

  return (
    <MaxWidthWrapper>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="py-16 px-4 lg:px-0"
      >
        <motion.div variants={variants} className="flex items-center gap-4">
          <Image
            src="/CleanupHubLogo.png"
            alt="CleanupHub Logo"
            width={64}
            height={64}
            className="rounded-lg"
          />
          <motion.h1 variants={variants} className="text-5xl font-bold">
            CleanupHub
          </motion.h1>
        </motion.div>

        <motion.div variants={variants} className="mt-16 flex gap-4">
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link
              href="https://cleanuphub.live"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-[#57A464] px-4 py-2 text-white transition-colors hover:bg-[#478553]"
            >
              <Link2 size={20} />
              <span>Visit Website</span>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link
              href="https://github.com/Pieczasz/cleanup-hub"
              target="_blank"
              className="flex items-center gap-2 rounded-lg border border-[#57A464] px-4 py-2 text-[#57A464] transition-colors hover:bg-[#57A464] hover:text-white"
            >
              <Github size={20} />
              <span>Source</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.section
          variants={variants}
          viewport={{ once: true }}
          className="mt-16 space-y-4"
        >
          <motion.h2
            variants={variants}
            className="text-4xl font-bold text-[#57A464]"
          >
            Project overview
          </motion.h2>
          <motion.p variants={variants} className="text-lg">
            CleanupHub is a comprehensive platform designed to connect
            environmental enthusiasts with local cleanup initiatives. The
            platform serves as a central hub for organizing and participating in
            community-driven environmental actions, making it easier than ever
            for people to make a positive impact on their local environment.
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
                  alt={`CleanupHub Screenshot ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-16 space-y-4">
          <motion.h2 className="text-3xl font-semibold text-[#57A464]">
            Key Features
          </motion.h2>
          <ul className="list-inside list-disc space-y-2 text-lg">
            {[
              "Real-time mapping of cleanup events and activities",
              "User authentication and profile management",
              "Event creation and management tools",
              "Donation feature to support local initiatives",
              "Impact metrics and progress tracking",
              "Gamification elements to encourage participation",
              "Mobile-responsive design for on-the-go access",
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
            className="text-3xl font-semibold text-[#57A464]"
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
                className="rounded-lg border border-gray-200 p-4 shadow-sm transition-all "
              >
                <h3 className="mb-2 font-semibold">{category.label}</h3>
                <div className="flex items-center gap-2">
                  {category.icons.map((Icon, iconIndex) => (
                    <Icon.icon
                      key={iconIndex}
                      className={`h-6 w-6 ${Icon.color}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">{category.stack}</p>
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
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
                  className="absolute -right-4 -top-4 z-50 rounded-full bg-white p-2"
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

export default CleanupHubPage;
