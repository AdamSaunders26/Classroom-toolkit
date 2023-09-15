import { formatName } from "@/app/(app)/utils/functions";

interface Props {
  pupil: Pupil | null;
  CTClass: CTClass | null;
}

export default function PupilDetails({ pupil, CTClass }: Props) {
  return (
    <section className="border-4 border-pink-500 p-4">
      <h2>
        {CTClass?.name} - Year {CTClass?.year}
      </h2>
      <div className="">
        <p>
          Teacher:{" "}
          {CTClass
            ? formatName(CTClass?.teacher.title, CTClass?.teacher.last_name)
            : null}
        </p>
        {pupil ? (
          <p>
            Name: {pupil?.first_name} {pupil?.last_name}
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
