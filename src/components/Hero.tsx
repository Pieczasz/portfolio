import React from "react";

const Hero = () => {
  return (
    <main className="my-[7.5rem] flex flex-col">
      <h1 className="mb-4 text-7xl font-bold">Hello, I&apos;m Bartek</h1>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:gap-x-4">
        <h2 className="text-4xl font-semibold">
          Full-Stack <span className="text-[#39AEC2]">Developer</span>
          <br />& UI / UX <span className="text-[#ADB557]">Designer</span>
        </h2>
        <h6 className="mt-4 text-lg sm:mb-2 sm:-rotate-[18.5deg]">
          Based in <span className="text-[#FC4545]">Poland</span>
        </h6>
      </div>
      <h4 className="text-2xl font-semibold">
        I&apos;m passionate about{" "}
        <span className="text-[#39AEC2]">building</span> practical,{" "}
        <br className="hidden sm:block" />
        minimalistic, and <span className="text-[#ADB557]">easy to use </span>
        apps and websites
      </h4>
    </main>
  );
};

export default Hero;
