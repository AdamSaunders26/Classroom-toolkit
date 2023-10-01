import ClassNameCard from "./ClassNameCard";

interface Props {
  allClasses: CTClass[] | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
}

export default function ClassesList({ allClasses, setCurrentClass }) {
  return (
    <div className="flex flex-col  overflow-y-scroll scroll-smooth overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-ctyellow items-center ">
      {allClasses ? (
        allClasses.map((CTClass) => {
          return (
            <ClassNameCard
              CTClass={CTClass}
              setCurrentClass={setCurrentClass}
            />
          );
        })
      ) : (
        <section>No classes found</section>
      )}
    </div>
  );
}
