import ClassList from "../components/ClassList";
import ModifyClass from "../components/ModifyClass";
import PupilDetails from "../components/PupilDetails";

export default function ClassPage() {
  return (
    <main className="border-4 col-span-4 grid grid-cols-5">
      <ClassList />
      <section className="col-span-4 border-4 border-green-500 grid grid-rows-2">
        <PupilDetails />
        <ModifyClass />
      </section>
    </main>
  );
}
