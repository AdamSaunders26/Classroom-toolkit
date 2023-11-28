"use client";
import { useContext, useEffect } from "react";
import NewTracker from "./components/NewTracker";
import TrackerCard from "./components/TrackerCard";
import { CTClassContext } from "../(app)/context/CTClassProvider";
import { useSession } from "next-auth/react";
import {
  getAllClasses,
  getTeacher,
} from "../(app)/fetchFunctions/fetchFunctions";
import { guestAllClasses } from "../(app)/guestData";

export default function TrackerPage() {
  const demoTrackerArray = [0, 1, 2, 3, 4];
  const { currentTeacher, setCurrentTeacher, allCTClasses, setAllCTClasses } =
    useContext(CTClassContext);
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user?.email) {
      getAllClasses(session.user.email, setAllCTClasses);
      //   setIsLoading(false);
    }
    if (currentTeacher?.id !== "guest") {
      getTeacher(session?.user?.email!).then((teacher) => {
        setCurrentTeacher(teacher);
      });
    }

    if (currentTeacher?.id === "guest" && !allCTClasses) {
      setAllCTClasses(guestAllClasses);
      //   setIsLoading(false);
    }
  }, [session?.user, currentCTClass, setAllCTClasses]);
  return (
    <main className="grid grid-cols-3 gap-4 m-4">
      {allCTClasses?.map((CTClass) => {
        return <TrackerCard key={CTClass.id} CTClass={CTClass} />;
      })}
      <NewTracker />
    </main>
  );
}
