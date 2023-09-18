import Link from "next/link";
import LogIn from "./LogIn";

export default function Header() {
  return (
    <header className="flex flex-row border-4 justify-between items-center">
      <h1 className="text-2xl">Classroom Toolkit</h1>
      <LogIn />
      <nav className="flex gap-2 mx-4">
        <Link href="/classes">Classes</Link>
        <p>Link</p>
        <p>Link</p>
      </nav>
    </header>
  );
}
