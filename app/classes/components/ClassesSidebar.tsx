import Link from "next/link";
import AddClassButton from "./AddClassButton";
import AddClassForm from "./AddClassForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getAllClasses } from "@/app/(app)/fetchFunctions/getFunctions";

interface Props {
  CTClasses: CTClass[] | null;
}

export default function CTClassesSidebar() {
  const [allClasses, setAllClasses] = useState<CTClass[] | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email)
      getAllClasses(session?.user?.email, setAllClasses);
  }, [session?.user]);

  return (
    <aside className="flex flex-col border-4 border-orange-500 p-4 justify-between">
      <section className="flex flex-col">
        <h2>Your classes:</h2>
        {allClasses ? (
          allClasses.map(({ id, name }) => {
            return (
              <Link key={id} href={`/classes/${id}`}>
                {name}
              </Link>
            );
          })
        ) : (
          <section>No classes found</section>
        )}
      </section>
      <AddClassForm setAllClasses={setAllClasses} />
    </aside>
  );
}
