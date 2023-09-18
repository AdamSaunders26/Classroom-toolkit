import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./(app)/Header";
import NextAuthProvider from "./NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classroom Toolkit",
  description: "All the tools a teacher could need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " border-2 border-red-500 h-screen flex flex-col "
        }
      >
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
