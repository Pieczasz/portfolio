// Framer motion
import { motion } from "framer-motion";

// Icons
import {
  Palette,
  Globe2,
  Cloud,
  Network,
  Github,
  Database,
} from "lucide-react";

// Skills and certificates data
const items = [
  {
    type: "skill",
    name: "UI & UX Design",
    icon: <Palette className="h-8 w-8 text-purple-500" />,
    description:
      "Creating intuitive and visually appealing user interfaces and experiences",
    color: "text-purple-500",
  },
  {
    type: "certificate",
    name: "MikroTik Certified Network Associate",
    icon: <Network className="h-8 w-8 text-blue-500" />,
    description:
      "Professional certification in network administration and management",
    color: "text-blue-500",
  },
  {
    type: "skill",
    name: "Web and Mobile app Development",
    icon: <Globe2 className="h-8 w-8 text-emerald-500" />,
    description: "Building responsive web applications and mobile solutions",
    color: "text-emerald-500",
  },
  {
    type: "certificate",
    name: "Github Foundations Certification",
    icon: <Github className="h-8 w-8 text-gray-700" />,
    description: "Mastery of Git version control and collaborative development",
    color: "text-gray-700",
  },
  {
    type: "skill",
    name: "Deployment",
    icon: <Cloud className="h-8 w-8 text-sky-500" />,
    description: "Managing cloud infrastructure and application deployment",
    color: "text-sky-500",
  },
  {
    type: "certificate",
    name: "MongoDB certificate (Node.js)",
    icon: <Database className="h-8 w-8 text-green-600" />,
    description: "Expertise in MongoDB database design and Node.js integration",
    color: "text-green-600",
  },
];

// Variants

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
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

// Helper paths
const getConnectorPath = (index: number) => {
  const paths = [
    // Bouncy wave
    "M0,0 C30,0 -10,100 30,100 S70,200 100,200",
    // Loop de loop
    "M0,0 C60,0 -30,100 30,100 S70,200 100,200",
    // Zigzag flow
    "M0,0 C40,50 -20,100 40,150 S100,200 100,200",
    // S-curve
    "M0,0 C80,0 20,100 80,100 S20,200 100,200",
    // Wide arc
    "M0,0 C50,0 0,100 50,100 S50,200 100,200",
  ];
  return paths[index % paths.length];
};

const getCardColor = (color: string) => {
  const colorMap: Record<string, string> = {
    "text-purple-500": "#A855F7",
    "text-blue-500": "#3B82F6",
    "text-emerald-500": "#10B981",
    "text-gray-700": "#374151",
    "text-sky-500": "#0EA5E9",
    "text-green-600": "#059669",
  };
  return colorMap[color] ?? "#57A464";
};

const ConnectorLine = ({ index }: { index: number }) => {
  const isEven = index % 2 === 0;
  const currentColor = items[index]
    ? getCardColor(items[index].color)
    : "#57A464";
  const nextColor = items[index + 1]
    ? getCardColor(items[index + 1]?.color ?? "")
    : currentColor;

  return (
    <svg
      className={`absolute h-full ${isEven ? "left-0" : "right-0"} hidden w-32 md:block`}
      style={{
        width: "20rem",
        marginLeft: isEven ? "-0.5rem" : "-16rem",
        marginRight: isEven ? "auto" : "-1rem",
        transform: !isEven ? "scaleX(-1)" : "none",
      }}
      viewBox="0 0 100 200"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`gradient-${index}`}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
        >
          <stop offset="0%" stopColor={isEven ? currentColor : nextColor} />
          <stop offset="100%" stopColor={isEven ? nextColor : currentColor} />
        </linearGradient>
      </defs>
      <motion.path
        d={getConnectorPath(index)}
        stroke={`url(#gradient-${index})`}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 },
          },
        }}
        viewport={{ once: true, margin: "-100px" }} // Viewport detection
      />
      <motion.circle
        r="4"
        fill={currentColor}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 1.8, duration: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <motion.path
          d={getConnectorPath(index)}
          stroke={`url(#gradient-${index})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.5 },
            },
          }}
          viewport={{ once: true, margin: "-100px" }} // Viewport detection
        />
      </motion.circle>
    </svg>
  );
};

const SkillsAndCertificates = () => {
  return (
    <div className="relative my-[7.5rem] flex flex-col px-4 sm:px-6">
      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.h2
          variants={variants.item}
          className="mb-8 text-3xl font-bold text-[#57A464] sm:mb-12 sm:text-4xl"
        >
          My Skills <span className="text-black">&</span>
          <span className="text-[#D9B03E]"> Certificates</span>
        </motion.h2>

        <div className="grid gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <motion.div
                className={`max-w-md rounded-xl border border-white/10 bg-white/80 p-6 shadow-lg backdrop-blur-sm ${
                  index % 2 === 0
                    ? "md:order-1 md:ml-auto"
                    : "md:order-2 md:mr-auto"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className={`text-xl font-semibold ${item.color}`}>
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              <div
                className={`relative ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
              >
                {index < items.length - 1 && <ConnectorLine index={index} />}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsAndCertificates;
