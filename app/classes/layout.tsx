import ClassesSidebar from "./components/ClassesSidebar";
import { class1 } from "@/app/mock data/class1";
import { class2 } from "@/app/mock data/class2";
import { class3 } from "@/app/mock data/class3";

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = [class1, class2, class3];
  return (
    <main className="grid grid-cols-5 h-full">
      <ClassesSidebar classes={classes} />
      {children}
    </main>
  );
}
