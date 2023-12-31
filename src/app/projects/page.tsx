import React from "react";
import Link from "next/link";
import ProjectSection from "@/app/components/sections/ProjectSection";

type Props = {};

async function getData(endpoint: string) {
  const res = await fetch(endpoint, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async (props: Props) => {
  let projectData = await getData(`${process.env.NEXT_PUBLIC_PROJECTS_LINK}`);

  projectData = projectData.sort((a: any, b: any) => a.rank - b.rank);

  return (
    <div className="mt-12">
      <ProjectSection projects={projectData} />
    </div>
  );
};

export default page;
