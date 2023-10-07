"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: any;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
