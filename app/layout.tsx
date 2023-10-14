import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import Header from "./(app)/appComponents/Header";
import NextAuthProvider from "./(app)/NextAuthProvider";
import { CTClassProvider } from "./(app)/context/CTClassProvider";

const inter = Inter({ subsets: ["latin"] });
const sarabun = Sarabun({ subsets: ["latin"], weight: "500" });

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
          sarabun.className +
          " bg-neutral-100 h-screen  flex flex-col overflow-hidden "
        }
      >
        <NextAuthProvider>
          <CTClassProvider>
            <Header />
            {children}
          </CTClassProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
