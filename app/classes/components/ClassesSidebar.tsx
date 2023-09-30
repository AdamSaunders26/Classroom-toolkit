import Link from "next/link";
import AddClassButton from "./AddClassButton";
import AddClassForm from "./AddClassForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getAllClasses } from "@/app/(app)/fetchFunctions/getFunctions";
import RemoveClassButton from "./RemoveClassButton";

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
    <aside className="flex flex-col   bg-ctblue p-2 justify-between ">
      <section className=" flex flex-col max-h-[50vh] ">
        <h2>Your classes:</h2>
        <div className="flex flex-col  overflow-y-scroll items-center ">
          {allClasses ? (
            allClasses.map(({ id, name }) => {
              return (
                <Link
                  className="bg-ctyellow m-2 rounded-md  w-full p-2"
                  key={id}
                  href={`/classes/${id}`}
                >
                  {name}
                </Link>
              );
            })
          ) : (
            <section>No classes found</section>
          )}
        </div>
      </section>
      <div className="flex flex-col gap-2">
        <AddClassForm setAllClasses={setAllClasses} />
        <RemoveClassButton />
      </div>
    </aside>
  );
}
