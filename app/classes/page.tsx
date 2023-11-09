import { RxArrowLeft } from "react-icons/rx";

export default function CTClassesPage() {
  return (
    <main className=" col-span-4 p-4 h-full flex justify-start items-center">
      <RxArrowLeft className="h-12 w-12 " />
      <p className="text-2xl">
        Click on a class to view more details or add a new class.
      </p>
    </main>
  );
}
