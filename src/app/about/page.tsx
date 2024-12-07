// Components
import AboutMeHero from "@/components/AboutMeHero";
import Education from "@/components/Education";
import Internships from "@/components/Internships";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Home() {
  return (
    <div className="container mx-auto px-2 md:px-4">
      <MaxWidthWrapper>
        <AboutMeHero />
        <Education />
        <Internships />
      </MaxWidthWrapper>
    </div>
  );
}
