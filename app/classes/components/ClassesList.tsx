import ClassNameCard from "./ClassNameCard";
import { ClassNameCardSkeleton } from "./ClassNameCardSkeleton";

interface Props {
  allClasses: CTClass[] | null;
  setCurrentClass: React.Dispatch<React.SetStateAction<CTClass | null>>;
  isLoading: boolean;
}

export default function ClassesList({
  allClasses,
  setCurrentClass,
  isLoading,
}) {
  if (!allClasses) {
    return <section>No classes found</section>;
  }
  console.log(isLoading);
  return (
    <div className="flex flex-col  overflow-y-scroll scroll-smooth overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-ctyellow items-center ">
      {isLoading
        ? ClassNameCardSkeleton()
        : allClasses.map((CTClass: CTClass) => {
            return (
              <ClassNameCard
                key={CTClass.id}
                CTClass={CTClass}
                setCurrentClass={setCurrentClass}
              />
            );
          })}
    </div>
  );
}
