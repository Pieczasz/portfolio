"use client";

// Components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

// Functions
import { useState } from "react";
import { useRouter } from "next/navigation";

// Framer motion
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  onClick,
}: {
  project: {
    id: number;
    title: string;
    year: string;
    role: string;
    tech: string;
    description: string[];
    icon: string;
  };
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="cursor-pointer rounded-lg border p-6 transition-all hover:border-[#57A464] hover:shadow-lg dark:border-gray-700 dark:hover:border-[#57A464]"
    >
      <div className="flex flex-col items-start text-left">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="relative inline-block">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              {project.title}
            </h2>
            <svg
              className="absolute -bottom-[4px] left-0 right-0 z-20 h-[8px] w-full"
              viewBox="0 0 400 7"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 4 Q 100 8 200 4 Q 300 0 400 4"
                strokeWidth="2"
                fill="none"
                style={{
                  strokeDasharray: 400,
                  stroke: "#57A464",
                }}
                animate={{
                  strokeDashoffset: isHovered ? 0 : 400,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </svg>
          </div>
          <div className="h-12 w-12 flex-shrink-0">
            <Image
              src={project.icon}
              alt={project.title}
              width={48}
              height={48}
              className="h-full w-full rounded-lg bg-white object-contain p-1.5 dark:bg-gray-300"
            />
          </div>
        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-400">{project.year}</p>
        <div className="mt-4">
          <p className="font-medium text-gray-800 dark:text-gray-200">
            {project.role}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.tech}
          </p>
        </div>
        <div className="mt-4 space-y-2">
          {project.description.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const router = useRouter();

  const projectData = [
    {
      id: 1,
      title: "Shared-Alarm",
      icon: "/shared_alarm_logo.png",
      year: "2025",
      role: "Development & UI / UX Design",
      tech: "React Native (Expo), Supabase, Native Wind",
      description: [
        "A collaborative alarm app that revolutionizes how friends and family wake up together, ensuring everyone stays synchronized for important events.",
        "Features include shared alarm groups and real-time confirmation when group members wake up.",
        "The app utilizes push notifications, background tasks, and seamless cloud synchronization to provide a reliable and engaging morning routine experience.",
      ],
    },
    {
      id: 2,
      title: "CleanupHub",
      icon: "/CleanupHubLogo.png",
      year: "2024",
      role: "Development & UI / UX Design",
      tech: "Next.js & Typescript, PostgreSQL, NextAuth",
      description: [
        "A comprehensive platform that connects environmental enthusiasts with local cleanup initiatives, making it easier than ever to participate in community environmental actions.",
        "Implements real-time mapping of cleanup events, progress tracking, and gamification elements to encourage consistent participation.",
        "Features include event creation tools, team formation capabilities, and impact metrics to visualize the collective difference made by the community.",
      ],
    },
    {
      id: 3,
      title: "Zabrze-Franciszek",
      icon: "/zabrze_franciszek_logo.svg",
      year: "2024",
      role: "Development & UI / UX Design",
      tech: "Next.js & Typescript, PostgreSQL, NextAuth",
      description: [
        "A website which I created for my church parish.",
        "It includes information about the parish, events, contact details, and roles for every parish member (altar boys, priests, etc.)",
        "The website is designed to be user-friendly and accessible to all members of the parish.",
      ],
    },
    {
      id: 4,
      title: "TraPla",
      icon: "/TravelPlanner.svg",
      year: "2024",
      role: "Development",
      tech: "Next.js, SQLite",
      description: [
        "A travel planning application built for hackathon, to help users organize their trips.",
        "Features include itinerary creation, budget tracking, and collaborative planning with friends.",
        "The app aims to simplify the travel planning process and enhance the overall travel experience.",
      ],
    },
    // TODO: Add more projects
  ];

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div className="my-[7.5rem] px-4 lg:px-0">
      <MaxWidthWrapper>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-5xl font-bold text-black dark:text-white"
        >
          All Projects
        </motion.h1>

        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() =>
                router.push(`/projects/${project.title.toLowerCase()}`)
              }
            />
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
