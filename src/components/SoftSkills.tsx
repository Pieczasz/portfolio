"use client";

// Framer Motion
import { motion } from "motion/react";
import { MessageCircle, Users, TrendingUp, Languages } from "lucide-react";

const SoftSkills = () => {
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
		whileInView: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	const softSkills = [
		{
			name: "Communication & Languages",
			icon: <Languages className="h-8 w-8 text-blue-500" />,
			description:
				"Fluent in English and Polish, effective cross-cultural communication",
			color: "text-blue-500",
			skills: [
				"English (Fluent)",
				"Polish (Native)",
				"Cross-cultural communication",
			],
		},
		{
			name: "Client Relations",
			icon: <MessageCircle className="h-8 w-8 text-green-500" />,
			description:
				"Strong ability to communicate with clients and understand their needs",
			color: "text-green-500",
			skills: [
				"Client consultation",
				"Requirements gathering",
				"Technical communication",
			],
		},
		{
			name: "Product Management",
			icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
			description:
				"Product management and marketing skills gained through personal projects and work at TheWidlarzGroup",
			color: "text-purple-500",
			skills: ["Product strategy", "Market research", "Feature prioritization"],
		},
		{
			name: "Team Collaboration",
			icon: <Users className="h-8 w-8 text-orange-500" />,
			description:
				"Experience working in diverse teams and leading project initiatives",
			color: "text-orange-500",
			skills: [
				"Working in diverse teams",
				"Cross-functional collaboration",
				"Project coordination",
			],
		},
	];

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView="whileInView"
			viewport={{ once: true, margin: "-100px" }}
			variants={variants}
			className="flex flex-col gap-y-6 px-4 lg:px-0 pt-16"
		>
			<motion.h2
				variants={variants}
				className="w-full text-center text-3xl font-bold text-[#57A464] md:text-left md:text-4xl"
			>
				Soft Skills
			</motion.h2>
			<motion.div variants={variants} className="grid gap-6 md:grid-cols-2">
				{softSkills.map((skill) => (
					<motion.div
						key={skill.name}
						variants={variants}
						className="rounded-lg border p-6 transition-all duration-300 hover:shadow-lg"
					>
						<div className="flex items-center gap-4 mb-4">
							{skill.icon}
							<h3 className="text-xl font-semibold text-black dark:text-white">
								{skill.name}
							</h3>
						</div>
						<p className="text-gray-600 dark:text-gray-400 mb-4">
							{skill.description}
						</p>
						<ul className="space-y-2">
							{skill.skills.map((skillItem) => (
								<li
									key={skillItem}
									className="flex items-center text-sm text-black dark:text-white"
								>
									<span
										className={`inline-block w-2 h-2 rounded-full ${skill.color.replace("text-", "bg-")} mr-3`}
									/>
									{skillItem}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
};

export default SoftSkills;
