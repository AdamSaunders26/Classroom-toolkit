"use client";
import { useEffect, useState } from "react";
import WelcomeMessage from "./appComponents/WelcomeMessage";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth <= 870);
    };

    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <main className="grid grid-cols-3 grid-rows-splash h-full">
      {isMobile ? (
        <p className="col-span-full row-span-full h-full w-full bg-ctblue flex items-center justify-center text-white text-xl text-center p-4">
          Classroom Toolkit is not currently supported on screens of this size.
          Please use a desktop for the intended experience.
        </p>
      ) : (
        <WelcomeMessage />
      )}
    </main>
  );
}
