import Link from "next/link";
import CTLogo from "../icon.svg";
import Image from "next/image";

interface Props {
  children: string;
}

export default function LogoH1({ children }: Props) {
  return (
    <Link href="/">
      <section className="flex gap-2 items-center">
        <Image
          priority
          className="h-16 w-16"
          src={CTLogo}
          alt="Classroom Toolkit logo"
        />
        <h1 className="text-3xl">{children}</h1>
      </section>
    </Link>
  );
}
