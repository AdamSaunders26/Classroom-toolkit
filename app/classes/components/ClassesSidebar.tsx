import Link from "next/link";

interface Props {
  classes: Class[];
}

export default function ClassesSidebar({ classes }: Props) {
  return (
    <aside className="flex flex-col border-4 border-orange-500 p-4">
      <h2>Your classes:</h2>
      {classes.map(({ name }) => {
        return (
          <section>
            <Link href={`/classes/${name.toLowerCase()}`}>{name}</Link>
          </section>
        );
      })}
    </aside>
  );
}
