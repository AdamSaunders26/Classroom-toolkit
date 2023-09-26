import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="flex text-xl gap-8">
      <Link href="/classes">Classes</Link>
      <p>Link 2</p>
      <p>Link 3</p>
    </nav>
  );
}
