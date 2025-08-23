"use client";

// Components
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkExperience from "@/components/WorkExperience";
import MyProjects from "@/components/MyProjects";
import SkillsAndCertificates from "@/components/SkillsAndCertificates";
import Technologies from "@/components/Technologies";

// Motion for animations
import { motion } from "motion/react";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="container mx-auto"
		>
			<MaxWidthWrapper>
				<Hero />
			</MaxWidthWrapper>
			<WorkExperience />
			<MaxWidthWrapper>
				<Technologies />
			</MaxWidthWrapper>
			<MyProjects />
			<SkillsAndCertificates />
		</motion.div>
	);
}
