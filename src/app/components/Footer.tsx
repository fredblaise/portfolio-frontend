import React from "react";
import GitHub from "@/app/components/icons/GitHub";
import LinkedIn from "@/app/components/icons/LinkedIn";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <p>made by fred.</p>

        <div className="flex gap-2">
          <Link href="https://linkedin.com/in/fred-blaise" target="_blank">
            <LinkedIn />
          </Link>
          <Link href="https://github.com/fredblaise" target="_blank">
            <GitHub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
