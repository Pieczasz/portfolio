// Components
import Link from "next/link";

// Framer motion
import { motion } from "framer-motion";

const Button = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black/10 dark:border-white/10 px-5 py-2 text-xl font-normal sm:px-8 sm:py-3 md:text-2xl"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 bg-[#57A464] dark:bg-[#68bf77]"
          initial={{ clipPath: "circle(0% at -4% 100%)" }}
          variants={{
            hover: { clipPath: "circle(170% at 27% 65%)" },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ color: "#000000" }}
          variants={{
            hover: { color: "#FFFFFF" },
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <h1 className="z-10 font-bold dark:text-white">{text}</h1>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Button;
