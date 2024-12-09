"use client";

// Components
import Button from "./Button";

// Functions
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react"; // Add this import

// Framer motion
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";

const MyProjects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    },
  };

  const projectData = [
    {
      id: 1,
      title: "Shared-Alarm",
      year: "2025",
      role: "Development & UI / UX Design",
      tech: "React Native (Expo), Supabase, Native Wind",
      description:
        "A collaborative alarm app that lets you share and sync alarms with friends and family.",
    },
    {
      id: 2,
      title: "CleanupHub",
      year: "2024",
      role: "Development & UI / UX Design",
      tech: "Next.js & Typescript, PostgreSQL, NextAuth",
      description:
        "A platform to organize and participate in community clean-up events.",
    },
    {
      id: 3,
      title: "Zabrze-Franciszek",
      year: "2024",
      role: "Development & UI / UX Design",
      tech: "Next.js & Typescript, PostgreSQL, NextAuth",
      description: "A website which I created for my church parish.",
    },
    {
      id: 4,
      title: "TraPla",
      year: "2024",
      role: "Development",
      tech: "Next.js, SQLite",
      description:
        "A travel planning application built for hackathon, to help users organize their trips.",
    },
  ];

  const router = useRouter();
  return (
    <MaxWidthWrapper>
      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-y-6 px-4 lg:px-0"
      >
        <div className="flex w-full max-w-5xl items-start">
          <motion.h2
            variants={variants.item}
            className="text-4xl font-bold text-[#57A464]"
          >
            My Projects
          </motion.h2>
        </div>

        <div className="flex flex-col gap-y-0">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              variants={variants.item}
              whileHover={{ scale: 1.02 }}
              className="group relative border-b-2 border-gray-200 hover:cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() =>
                router.push(`/projects/${project.title.toLocaleLowerCase()}`)
              }
            >
              <div className="mx-auto my-9 flex max-w-3xl flex-col space-y-4 px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-semibold sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg">{project.year}</p>
                  </div>
                  <div className="flex flex-col items-start">
                    <h5 className="text-lg font-medium sm:text-xl">
                      {project.role}
                    </h5>
                    <p className="text-sm font-light sm:text-base">
                      {project.tech}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="max-w-2xl text-gray-600">
                    {project.description}
                  </p>
                  <ArrowRight className="-translate-x-4 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>

              <svg
                className="absolute -bottom-[2px] left-0 right-0 z-20 h-[2px] w-full"
                viewBox="0 0 400 2"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0 1 L 400 1"
                  strokeWidth="2"
                  fill="none"
                  style={{
                    strokeDasharray: 400,
                    stroke: "#57A464",
                  }}
                  initial={{ strokeDashoffset: 400 }}
                  animate={{
                    strokeDashoffset: hoveredId === project.id ? 0 : 400,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <Button text="Find More" href="/projects" />
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default MyProjects;
