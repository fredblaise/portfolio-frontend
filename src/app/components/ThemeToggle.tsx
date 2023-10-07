"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";

type Props = {
  className: string;
};

export function ThemeToggle({ className }: Props) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Check if user has a theme preference in local storage
    const savedTheme = window.localStorage.getItem("user-theme-preference");

    if (
      savedTheme &&
      (savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system")
    ) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const handleThemeChange = (e: any) => {
    // Save the user's theme preference in local storage
    window.localStorage.setItem("user-theme-preference", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <>
      <select
        value={theme}
        className={`cursor-pointer ${className}`}
        onChange={handleThemeChange}
      >
        <option value="system">AUTO</option>
        <option value="light">LIGHT</option>
        <option value="dark">DARK</option>
      </select>
    </>
  );
}
