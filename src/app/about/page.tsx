// Components
import AboutMeHero from "@/components/AboutMeHero";
import Education from "@/components/Education";
import SoftSkills from "@/components/SoftSkills";
import Internships from "@/components/Internships";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Home() {
	return (
		<div className="container mx-auto">
			<MaxWidthWrapper>
				<AboutMeHero />
				<Education />
				<SoftSkills />
				<Internships />
			</MaxWidthWrapper>
		</div>
	);
}
