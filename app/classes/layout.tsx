import ClassesSidebar from "./components/ClassesSidebar";

export default function ClassesLayout({ children }: {
    children: React.ReactNode
  }) {
    return <main className="grid grid-cols-5 h-full">
        <ClassesSidebar />
        { children }
         </main>;
}