import Link from "next/link";

interface Props {
  CTclasses: CTClass[];
}

export default function CTClassesSidebar({ CTclasses }: Props) {
  return (
    <aside className="flex flex-col border-4 border-orange-500 p-4">
      <h2>Your classes:</h2>
      {CTclasses.map(({ name }) => {
        return (
          <section key={name}>
            <Link href={`/classes/${name.toLowerCase()}`}>{name}</Link>
          </section>
        );
      })}
    </aside>
  );
}
