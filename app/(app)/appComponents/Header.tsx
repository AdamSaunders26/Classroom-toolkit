import CurrentUser from "./CurrentUser";
import LogoH1 from "./LogoH1";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="flex flex-row border-b-4 border-b-CTBlue shadow-lg justify-between items-center p-2">
      <LogoH1>Classroom Toolkit</LogoH1>
      <HeaderNav />
      <CurrentUser />
    </header>
  );
}
