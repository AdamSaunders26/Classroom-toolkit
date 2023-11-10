"use client";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CTClassContext } from "../context/CTClassProvider";
import { useRouter } from "next/router";
import { detectPupils } from "./functions";

export function guestSignOut(
  buttonClass: string,
  setCurrentTeacher: React.Dispatch<React.SetStateAction<Teacher | null>>,
  router
) {
  return (
    <Button
      className={buttonClass}
      onClick={() => {
        setCurrentTeacher(null);
        router.push(process.env.NEXT_PUBLIC_HOME_URL as string);
      }}
    >
      Guest - sign out
    </Button>
  );
}

export function getSingleGuestClass(
  allCTClasses: CTClass[],
  params: {
    CTclassId: number;
  },
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>
) {
  setCurrentCTClass(() => {
    const currentGuestClass = allCTClasses?.filter((guestClass) => {
      return guestClass.id == params.CTclassId;
    });

    return currentGuestClass[0];
  });
}

export function addGuestPupil(
  first_name: string,
  last_name_initials: string | undefined,
  currentCTClass: CTClass,
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>
) {
  const newPupil: Pupil = {
    id: Date.now() * Math.random(),
    first_name,
    last_name_initials,
    CTClassId: currentCTClass?.id,
  };

  setCurrentCTClass((curr) => {
    if (curr) {
      return { ...curr, pupils: [...curr.pupils, newPupil] };
    } else {
      return null;
    }
  });
}

export function pasteGuestPupils(
  currentCTClass: CTClass,
  formData: {
    newPupils: string;
  },
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>
) {
  const newPupils = detectPupils(formData.newPupils);
  const pupilsToAdd = newPupils.map((pupil) => {
    const newPupil: Pupil = {
      id: Date.now() * Math.random(),
      first_name: pupil.first_name,
      last_name_initials: pupil.last_name_initials
        ? pupil.last_name_initials
        : "",
      CTClassId: currentCTClass?.id,
    };

    return newPupil;
  });

  setCurrentCTClass((curr) => {
    if (curr) {
      return { ...curr, pupils: [...curr.pupils.concat(pupilsToAdd)] };
    } else {
      return null;
    }
  });
}

export function sortGuestClass(a, b) {
  const nameA = a.first_name.toUpperCase();
  var nameB = b.first_name.toUpperCase();
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
}

export function removeGuestPupil(
  currentPupil: Pupil,
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>
) {
  setCurrentCTClass((curr) => {
    if (curr) {
      return {
        ...curr,
        pupils: curr.pupils.filter((pupil) => {
          return pupil.id !== currentPupil.id;
        }),
      };
    } else {
      return null;
    }
  });
}

export function updateGuestPupil(
  pupil: Pupil,
  first_name: string,
  last_name_initials: string | undefined,
  setCurrentPupil: React.Dispatch<React.SetStateAction<Pupil | null>>,
  currentCTClass: CTClass,
  setCurrentCTClass: React.Dispatch<React.SetStateAction<CTClass | null>>
) {
  setCurrentCTClass((curr) => {
    if (curr) {
      const pupils = [...curr.pupils];
      for (let i = 0; i < pupils.length; i++) {
        if (pupils[i].id === pupil.id) {
          pupils[i].first_name = first_name;
          pupils[i].last_name_initials = last_name_initials;
        }
      }
      return { ...curr, pupils: pupils };
    } else {
      return null;
    }
  });

  setCurrentPupil((curr) => {
    const newPupil = currentCTClass.pupils.filter((updatedPupil) => {
      return curr?.id === updatedPupil.id;
    });
    return newPupil[0];
  });
}

export function addGuestClass(
  name: string,
  yearGroup: string,
  setAllCTClasses: React.Dispatch<React.SetStateAction<CTClass[] | null>>
) {
  setAllCTClasses((curr) => {
    const newTempClass = {
      id: Date.now(),
      name: name,
      yearGroup: yearGroup,
      teacherId: "guest",
      pupils: [],
    };

    if (curr) {
      return [...curr, newTempClass];
    } else {
      return null;
    }
  });
}

export function deleteGuestClass(
  id: number,
  setAllCTClasses: React.Dispatch<React.SetStateAction<CTClass[] | null>>
) {
  setAllCTClasses((curr) => {
    if (curr) {
      return curr.filter((CTClass) => {
        return CTClass.id !== id;
      });
    } else {
      return null;
    }
  });
}
