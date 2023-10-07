import React from "react";
import ProjectItem from "@/app/components/ProjectItem";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  img_url: string;
};

type Props = {
  projects: Project[];
};

const ProjectSection = ({ projects }: Props) => {
  return (
    <div
      id="projects"
      className="mx-auto flex w-full max-w-6xl scroll-mt-12 flex-col gap-6 px-4 pb-48 pt-8"
    >
      <h1 className="text-6xl font-semibold max-sm:text-center">PROJECTS</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectItem
            key={i}
            title={project.title}
            description={project.description}
            link={project.link}
            img_url={project.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
