interface Props {
  CTclass: CTClass | null;
}

export default function ClassList({ CTclass }: Props) {
  if (CTclass) {
    return (
      <section className="border-4 p-4 border-blue-500">
        <ul>
          <h2>Name:</h2>
          {CTclass.pupils.map((pupil) => (
            <li>{`${pupil.first_name} ${pupil.last_name}`}</li>
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="border-4 p-4 border-blue-500">
        Class not found
      </section>
    );
  }
}
