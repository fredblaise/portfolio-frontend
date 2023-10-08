import React from "react";
import Image from "next/image";
import BlackDownArrows from "@/app/components/animation/BlackDownArrows";
import WhiteDownArrows from "@/app/components/animation/WhiteDownArrows";

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
          className="obj absolute z-0 h-full w-full opacity-90 dark:opacity-80 max-sm:object-cover"
        />
      </div>
      <div className="absolute z-10 grid min-h-full w-full place-content-center justify-evenly bg-black/20 px-4 transition-colors dark:bg-black/70">
        <p
          className="title animate-slideUpFadeIn z-0 m-auto text-center text-7xl font-bold opacity-0 duration-500 
             ease-out [animation-delay:0.5s;] dark:text-white"
        >
          {title}
        </p>

        <p
          className="animate-slideUpFadeIn z-0 mx-auto mt-4 w-fit px-1 text-center text-2xl 
             font-semibold opacity-0 delay-500 duration-100 ease-out [animation-delay:1.5s;]"
        >
          {subtitle}
        </p>

        <div className="animate-fadeIn z-0 mx-auto opacity-0 [animation-delay:2.5s;] dark:hidden">
          <BlackDownArrows />
        </div>
        <div className="animate-fadeIn z-0 mx-auto hidden opacity-0 [animation-delay:2.5s;] dark:block">
          <WhiteDownArrows />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
