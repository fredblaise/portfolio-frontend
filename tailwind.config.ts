import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUpFadeIn: "slideUpFadeIn 2s forwards",
        fadeIn: "fadeIn 1.5s forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
