import React from "react";
import { formatText } from "@/app/utils/format-text";

type Props = {
  about: string;
};

const AboutSection = ({ about }: Props) => {
  const formattedAbout = formatText(about);

  return (
    <div
      id="about"
      className="mx-auto flex w-full max-w-6xl scroll-mt-12 flex-col gap-6 px-4 pb-48 pt-8"
    >
      <h1 className="text-6xl font-semibold max-sm:text-center">ABOUT</h1>
      <div className="flex flex-col gap-4 text-justify text-3xl">
        {formattedAbout}
      </div>
    </div>
  );
};

export default AboutSection;
