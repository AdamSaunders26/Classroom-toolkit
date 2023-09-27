"use client";
import CurrentUser from "./CurrentUser";
import LogoH1 from "./LogoH1";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="flex flex-col border-b-4 border-b-ctblue shadow-lg  ">
      <section className="flex flex-row justify-between items-center p-2">
        <LogoH1>Classroom Toolkit</LogoH1>
        <HeaderNav />
        <CurrentUser />
      </section>
      <div className="border-b-4 border-b-ctyellow"></div>
    </header>
  );
}
