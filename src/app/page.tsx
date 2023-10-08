import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ProjectSection from "@/app/components/sections/ProjectSection";
import ContactSection from "@/app/components/sections/ContactSection";

async function getData(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const portfolioData = await getData(
    `${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`,
  );
  const projectData = await getData(`${process.env.NEXT_PUBLIC_PROJECTS_LINK}`);

  return (
    <>
      <HeroSection
        title={portfolioData[0].title}
        subtitle={portfolioData[0].subtitle}
        heroImage={portfolioData[0].hero_image}
      />
      <div className="flex flex-col gap-20">
        <AboutSection about={portfolioData[0].about} />
        <ProjectSection projects={projectData} />
        {/* <ContactSection /> */}
      </div>
    </>
  );
}
