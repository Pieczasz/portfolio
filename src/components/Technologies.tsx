// Components
import Image from "next/image";

// Framer motion
import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    icon: "/nextjs.svg",
    description:
      "Full-stack framework for React applications with server-side rendering and static generation",
  },
  {
    name: "React & React Native",
    icon: "/react.svg",
    description:
      "Building interactive user interfaces for web and mobile applications",
  },
  {
    name: "TypeScript",
    icon: "/typescript.svg",
    description:
      "Type-safe JavaScript that scales for reliable enterprise applications",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.svg",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "Figma",
    icon: "/figma.svg",
    description: "Design and prototype creation for seamless user experiences",
  },
  {
    name: "tRPC",
    icon: "/trpc.svg",
    description: "End-to-end typesafe APIs for full-stack applications",
  },
  {
    name: "Supabase",
    icon: "/supabase.svg",
    description: "Open source Firebase alternative with PostgreSQL database",
  },
  {
    name: "Appwrite",
    icon: "/appwrite.svg",
    description: "Open-source backend server for web and mobile applications",
  },
];

const TechnologyCard = ({
  name,
  icon,
  description,
}: {
  name: string;
  icon: string;
  description: string;
}) => {
  // Add className for dark logos that need to be inverted in dark mode
  const shouldInvertInDarkMode = name === "Next.js" || name === "Figma";

  return (
    <motion.div
      variants={cardVariants}
      className="border-border dark:border-border-dark bg-background dark:bg-background-dark group flex flex-col items-center gap-4 rounded-xl border p-6 shadow-lg backdrop-blur-sm"
    >
      <div className="h-12 w-12 flex-shrink-0">
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          className={`h-full w-full ${
            shouldInvertInDarkMode ? "dark:invert" : ""
          }`}
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-foreground dark:text-foreground-dark text-lg font-semibold">
          {name}
        </span>
        <span className="text-muted-foreground dark:text-muted-dark-foreground text-sm">
          {description}
        </span>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

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

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 1, 0.4, 1],
    },
  },
};

const Technologies = () => {
  return (
    <div className="my-[4rem] px-4 sm:my-[7.5rem] sm:px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={titleVariants}
          className="mb-8 text-center text-3xl font-bold text-[#57A464] sm:mb-12 sm:text-4xl"
        >
          Technologies I Work With
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
        >
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
