import { formatName } from "@/app/(app)/utils/functions";

interface Props {
  pupil: Pupil | null;
  CTClass: CTClass | null;
}

export default function PupilDetails({ pupil, CTClass }: Props) {
  return (
    <section className="m-4 rounded-md bg-ctblue p-4 text-white">
      <h2 className="text-2xl text-ctyellow">
        {CTClass?.name} - Year {CTClass?.yearGroup}
      </h2>
      <div className="text-xl">
        {pupil ? (
          <p>
            Name: {pupil?.first_name} {pupil?.last_name_initials}
          </p>
        ) : (
          <p>No child selected</p>
        )}

        <p className="mt-4">
          Other things will go here once implemented, such as sections of
          reward/homework trackers
        </p>
      </div>
    </section>
  );
}
