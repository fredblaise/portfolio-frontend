import React from "react";

type Props = {
  children: any;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, className, type }: Props) => {
  return (
    <button
      type={type}
      className={`${
        className != undefined ? className : ""
      } w-full rounded border border-gray-300 px-4 py-2 text-xl font-medium transition hover:bg-black hover:text-white focus:ring active:bg-black active:text-white dark:hover:bg-white dark:hover:text-black active:dark:bg-white active:dark:text-black max-sm:mx-auto max-sm:bg-black max-sm:text-white dark:max-sm:bg-white dark:max-sm:text-black md:w-fit`}
    >
      {children}
    </button>
  );
};

export default Button;
