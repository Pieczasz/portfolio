import { useState } from "react";
import Image from "next/image";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/20"
    >
      <div className="h-12 w-12 flex-shrink-0">
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="relative">
          <span className="relative z-10 text-lg font-semibold">{name}</span>
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
        <span className="text-sm text-gray-600">{description}</span>
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
        animate="visible" // Changed from whileInView to animate
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
