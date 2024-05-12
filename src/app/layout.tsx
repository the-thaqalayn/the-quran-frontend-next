import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/common/Providers";
// import Header from "@/components/header/Header";
import StyledComponentsRegistry from "@/lib/registry";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/header/Header"), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Header />
        <main>
          <div className="container mx-auto min-h-screen">
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
        </main>
      </Providers>
    </html>
  );
}
