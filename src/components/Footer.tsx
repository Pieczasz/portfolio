// Components
import Link from "next/link";

// Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-row items-end justify-between py-6">
      <h4 className="text-2xl font-semibold">Piekarz 2024 &copy;</h4>
      <div className="flex flex-row gap-x-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <SiUpwork size={24} />
          <span>Upwork</span>
        </a>
        <a
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 transition-colors hover:text-[#57A464]"
        >
          <TbBrandFiverr size={24} />
          <span>Fiverr</span>
        </a>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link href="/contact" className="group flex items-center">
          <span className="text-2xl font-semibold transition-colors group-hover:text-[#57A464]">
            Contact Me
          </span>
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-6 w-6 fill-none stroke-black stroke-[3px] transition-all duration-300 ease-in-out"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            />
          </svg>
        </Link>
        <Link href="/projects" className="group flex items-center">
          <span className="text-2xl font-semibold transition-colors group-hover:text-[#57A464]">
            My Projects
          </span>
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-6 w-6 fill-none stroke-black stroke-[3px] transition-all duration-300 ease-in-out"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
