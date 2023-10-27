"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProjectItem from "@/app/components/ProjectItem";
import Button from "../Button";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  img_url: string;
  rank: number;
  is_featured: boolean;
};

type Props = {
  projects: Project[];
};

const ProjectSection = ({ projects }: Props) => {
  const currentPage = usePathname();

  return (
    <div
      id="projects"
      className="mx-auto flex w-full max-w-6xl scroll-mt-12 flex-col gap-6 px-4 pb-48 pt-8"
    >
      <h1 className="flex items-center justify-between max-sm:flex-col">
        <p className="text-6xl font-semibold">
          {currentPage != "/" && "ALL "}PROJECTS
        </p>
        <Link
          href={"/projects"}
          className={`hidden items-center ${currentPage === "/" && "md:block"}`}
        >
          <Button>See More</Button>
        </Link>
      </h1>
      <div className="flex w-full flex-wrap justify-center gap-6">
        {projects.map((project, i) => (
          <ProjectItem
            key={i}
            title={project.title}
            description={project.description}
            link={project.link}
            img_url={project.img_url}
          />
        ))}
        <Link
          href={"/projects"}
          className={`ml-auto hidden ${currentPage === "/" && "max-sm:block"}`}
        >
          <Button>See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
