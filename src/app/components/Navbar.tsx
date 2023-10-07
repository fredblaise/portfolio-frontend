"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import ThreeBars from "@/app/components/icons/ThreeBars";
import CrossMark from "@/app/components/icons/CrossMark";

type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    e.preventDefault();
    setNavbarOpen(false);
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const OFFSET = 200;

  useEffect(() => {
    const handleScrollEvent = () => {
      // Get current scroll position
      const scrollY = window.scrollY + OFFSET;

      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check each section to see if it's in view
      const sections = Array.from(document.querySelectorAll("nav a"))
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
        .map((href) => href!.slice(1));

      for (let section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollY &&
          element.offsetTop + element.offsetHeight > scrollY
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full text-xl font-semibold transition-colors duration-300 ${
        scrolled || navbarOpen
          ? "bg-black/50 text-white shadow-md backdrop-blur-sm dark:bg-white/50 dark:text-black"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 ${
          navbarOpen ? " max-md:flex-col" : ""
        }`}
      >
        <div className="relative flex h-12 w-full max-w-6xl items-center justify-between">
          <a
            href="#heroSection"
            onClick={handleScroll}
            className="text-2xl uppercase"
          >
            Fred Blaise
          </a>

          <button
            className={`block cursor-pointer rounded border border-solid border-transparent bg-transparent text-xl leading-none outline-none focus:outline-none lg:hidden ${
              scrolled || navbarOpen
                ? "text-white dark:text-black"
                : "text-black dark:text-white"
            }`}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <CrossMark /> : <ThreeBars />}
          </button>
        </div>

        <ul
          className={`flex list-none items-center gap-4 max-sm:pb-4 lg:flex lg:flex-row ${
            navbarOpen ? "flex-col" : "max-sm:hidden"
          }`}
        >
          {sections.map((section) => (
            <li>
              <a
                href={section.link}
                onClick={handleScroll}
                className={`uppercase ${
                  activeSection === section.name.toLowerCase()
                    ? "underline decoration-[3px] underline-offset-4"
                    : ""
                }`}
              >
                {section.name}
              </a>
            </li>
          ))}

          <li>
            <ThemeToggle className="max-w-fit bg-transparent text-center" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const newNavbar = () => {
  let [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    e.preventDefault();
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const OFFSET = 200;

  useEffect(() => {
    const handleScrollEvent = () => {
      // Get current scroll position
      const scrollY = window.scrollY + OFFSET;

      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check each section to see if it's in view
      const sections = Array.from(document.querySelectorAll("nav a"))
        .map((a) => a.getAttribute("href"))
        .filter(Boolean)
        .map((href) => href!.slice(1));

      for (let section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollY &&
          element.offsetTop + element.offsetHeight > scrollY
        ) {
          setActiveSection(section);
          console.log(activeSection);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  let Links = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full text-xl font-semibold ${
        scrolled
          ? "bg-black/50 text-white shadow-md backdrop-blur-sm transition dark:bg-white/50 dark:text-black"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto h-16 max-w-6xl items-center justify-between p-4 md:flex`}
      >
        <div className="flex cursor-pointer items-center text-2xl font-bold">
          <a
            onClick={handleScroll}
            href="#heroSection"
            className="text-2xl uppercase"
          >
            Fred Blaise
          </a>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute h-8 w-8 cursor-pointer md:hidden"
        >
          {open ? <CrossMark /> : <ThreeBars />}
        </div>
        {/* link items */}
        <ul
          className={`absolute left-0 z-[-1] w-full gap-4 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "" : ""
          }`}
        >
          {Links.map((link) => (
            <li>
              <a
                href="#about"
                onClick={handleScroll}
                className={`uppercase ${
                  activeSection === "#about"
                    ? "underline decoration-[3px] underline-offset-4"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
