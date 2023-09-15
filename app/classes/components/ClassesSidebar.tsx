import Link from "next/link";

interface Props {
  CTClasses: CTClass[] | null;
}

export default function CTClassesSidebar({ CTClasses }: Props) {
  return (
    <aside className="flex flex-col border-4 border-orange-500 p-4">
      <h2>Your classes:</h2>
      {CTClasses ? (
        CTClasses.map(({ name }) => {
          return (
            <section key={name}>
              <Link href={`/classes/${name?.toLowerCase()}`}>{name}</Link>
            </section>
          );
        })
      ) : (
        <section>No classes found</section>
      )}
    </aside>
  );
}
