"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import SettingProvider from "./SettingProvider";

interface ProvidersProps {
  children: React.ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <SettingProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SettingProvider>
  );
};
export default Providers;
