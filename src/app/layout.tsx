import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "@/ui/home-nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Code Camp Exercises bruh",
  description: "My Code Camp Exercises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="fixed top-0 w-full bg-white dark:bg-black z-10">
            <NavLinks />
          </header>
          <main className="flex-grow pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
