"use client";

import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Github, Link2, X, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiReact,
  SiFigma,
} from "react-icons/si";

const SharedAlarmPage = () => {
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
    "/shared-alarm/shared_alarm_creation.jpg",
    "/shared-alarm/shared_alarm_clock.jpg",
    "/shared-alarm/shared_alarm_stopwatch.jpg",
    "/shared-alarm/shared_alarm_timer.jpg",
  ];

  const techStack = [
    {
      label: "Frontend",
      stack: "React Native (Expo), TypeScript, Tailwind CSS, Figma",
      icons: [
        { icon: SiReact, color: "text-blue-400" },
        { icon: SiTypescript, color: "text-blue-600" },
        { icon: SiTailwindcss, color: "text-cyan-500" },
        { icon: SiFigma, color: "text-purple-500" },
      ],
    },
    {
      label: "Backend",
      stack: "Supabase, PostgreSQL",
      icons: [
        { icon: SiSupabase, color: "text-green-600" },
        { icon: SiPostgresql, color: "text-slate-800" },
      ],
    },
  ];

  return (
    <MaxWidthWrapper>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="py-16"
      >
        {/* Title section */}
        <motion.div variants={variants} className="flex items-center gap-4">
          <Image
            src="/shared_alarm_logo.png"
            alt="Shared Alarm Logo"
            width={64}
            height={64}
            className="rounded-lg"
          />
          <motion.h1 variants={variants} className="text-5xl font-bold">
            Shared Alarm
          </motion.h1>
        </motion.div>

        {/* Add notice banner */}
        <motion.div
          variants={variants}
          className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4"
        >
          <p className="text-yellow-800">
            🚧 This app is currently under development and not yet available for
            download. Stay tuned for updates!
          </p>
        </motion.div>

        <motion.div variants={variants} className="mt-16 flex gap-4">
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <div className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-400 px-4 py-2 text-white">
              <Link2 size={20} />
              <span>Coming Soon</span>
            </div>
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
            <div className="flex cursor-not-allowed items-center gap-2 rounded-lg border border-gray-400 px-4 py-2 text-gray-600">
              <Github size={20} />
              <span>Source</span>
              <Lock className="lock-icon ml-1" size={16} />
            </div>
          </motion.div>
        </motion.div>

        <motion.section className="mt-16 space-y-4">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 pb-4 md:flex-row md:overflow-x-auto">
            {screenshots.map((src, index) => (
              <motion.div
                key={index}
                variants={variants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(src)}
                className="w-[200px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
              >
                <Image
                  src={src}
                  alt={`Shared Alarm Screenshot ${index + 1}`}
                  width={200}
                  height={432}
                  className="w-full"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Key Features section */}
        <motion.section className="mt-16 space-y-4">
          <motion.h2 className="text-3xl font-semibold text-[#4e81d2]">
            Key Features
          </motion.h2>
          <ul className="list-inside list-disc space-y-2 text-lg">
            {[
              "Synchronized alarms across multiple devices",
              "Group alarm creation and management",
              "Real-time notifications and alerts",
              "Custom sound and vibration patterns",
              "Sleep tracking and statistics",
              "Social accountability features",
              "Cross-platform compatibility",
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
            className="text-3xl font-semibold text-[#4e81d2]"
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
                className="rounded-lg border border-gray-200 p-4 shadow-sm transition-all hover:shadow-md"
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

export default SharedAlarmPage;
