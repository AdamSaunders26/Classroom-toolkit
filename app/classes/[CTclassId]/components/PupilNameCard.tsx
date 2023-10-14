export default function PupilNameCard({ pupil }) {
  return (
    <p className="mt-2">
      Name: {pupil.first_name} {pupil.last_name_initials}
    </p>
  );
}
