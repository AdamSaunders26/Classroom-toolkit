import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  CTClass: CTClass;
}
export default function TrackerCard({ CTClass }: Props) {
  return (
    <Link href={`/trackers/${CTClass.id}`} legacyBehavior>
      <Button className=" bg-ctblue shadow-m  flex-col hover:bg-ctblue-400 text-white rounded-md p-2 flex h-48  items-center justify-center ">
        <p className="text-2xl">Behaviour Tracker</p>
        <section className="flex text-2xl justify-between gap-2">
          <p>
            {CTClass.name} - Year {CTClass.yearGroup}
          </p>
        </section>
      </Button>
    </Link>
  );
}
