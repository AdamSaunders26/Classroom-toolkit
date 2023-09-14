interface Props {
  pupil: Pupil | null;
}

export default function PupilDetails({ pupil }: Props) {
  return (
    <section className="border-4 border-pink-500 p-4">
      <h2>
        {pupil?.CTclass} - Year {pupil?.year}
      </h2>
      <div className="">
        <p>
          Name: {pupil?.first_name} {pupil?.last_name}
        </p>
        <p>
          Other things will go here once implemented, such as sections of
          reward/homework trackers
        </p>
      </div>
    </section>
  );
}
