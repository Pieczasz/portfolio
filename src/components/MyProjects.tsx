// Components
import Button from "./Button";

// Functions
import { useRouter } from "next/navigation";
import { useState } from "react";

// Framer motion
import { motion } from "framer-motion";

const MyProjects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getTextColor = (projectTitle: string) => {
    switch (projectTitle) {
      case "Shared Alarm":
        return "#4467C4"; // light blue
      case "CleanupHub":
        return "#57A464"; // green
      case "Zabrze-Franciszek":
        return "#000000"; // black
      case "TraPla":
        return "#00008B"; // darker blue
      default:
        return "#0000FF"; // default green
    }
  };

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
      title: "Shared Alarm",
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
    <motion.div
      variants={variants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-y-6"
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
            className="perspective-1000 relative border-b-2 border-gray-200 hover:cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onMouseMove={handleMouseMove}
            onClick={() =>
              router.push(`/projects/${project.title.toLocaleLowerCase()}`)
            }
          >
            <motion.div
              className="backface-hidden relative"
              animate={{
                opacity: hoveredId === project.id ? 0 : 1,
                scale: hoveredId === project.id ? 0.95 : 1,
                rotateX: hoveredId === project.id ? -180 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {/* Front of card */}
              <div className="mx-auto my-9 flex max-w-3xl flex-col space-y-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:px-6">
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h3>
                  <h6 className="text-base sm:text-lg">{project.year}</h6>
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
            </motion.div>

            {/* Back of card */}
            {hoveredId === project.id && (
              <motion.div
                className="backface-hidden absolute inset-0"
                initial={{ opacity: 0, scale: 0.95, rotateX: 180 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <div className="flex h-full items-center justify-center p-6">
                  <p className="text-lg">{project.description}</p>
                </div>
              </motion.div>
            )}

            {/* Read More Cursor Follower */}
            {hoveredId === project.id && (
              <motion.div
                className="pointer-events-none fixed z-50"
                style={{
                  left: mousePosition.x - 50, // Adjusted to center the circle
                  top: mousePosition.y - 50, // Adjusted to center the circle
                }}
                transition={{ duration: 0 }}
              >
                <svg width="100" height="100" className="rotate-0">
                  <path
                    id={`textPath-${project.id}`}
                    d="M 50 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    fill="none"
                    className="text-[#57A464]"
                  />
                  <motion.text
                    dy="10"
                    fill={getTextColor(project.title)}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <textPath
                      href={`#textPath-${project.id}`}
                      className="text-xs font-medium tracking-widest"
                    >
                      READ MORE • READ MORE • READ MORE •
                    </textPath>
                  </motion.text>
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        {" "}
        <Button text="Find More" href="/projects" />
      </div>
    </motion.div>
  );
};

export default MyProjects;
