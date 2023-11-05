import React from "react";
import Image from "next/image";
import BlackArrows from "@/app/components/animation/BlackArrows";
import WhiteArrows from "@/app/components/animation/WhiteArrows";

type Props = {
  title: string;
  subtitle: string;
  heroImage: string;
};

const HeroSection = ({ title, subtitle, heroImage }: Props) => {
  return (
    <div id="heroSection" className="min-h-screen w-full">
      <div>
        <Image
          src={heroImage}
          alt="Hero"
          fill
          className="relative z-0 w-full opacity-90 dark:opacity-80 max-sm:object-cover"
        />
      </div>
      <div className="absolute z-10 grid min-h-full w-full place-content-center justify-evenly bg-black/20 px-4 transition-colors dark:bg-black/70">
        <p className="title m-auto text-center text-7xl font-bold dark:text-white">
          {title}
        </p>

        <p className=" mx-auto mt-4 w-fit px-1 text-center text-2xl font-semibold">
          {subtitle}
        </p>

        <div className="animate-fadeIn z-0 mx-auto hidden [animation-delay:2.5s;] dark:block">
          <WhiteArrows />
        </div>
        <div className="animate-fadeIn z-0 mx-auto [animation-delay:2.5s;] dark:hidden">
          <BlackArrows />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
