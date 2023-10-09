import { Dispatch, SetStateAction } from "react";

export async function getSingleClass(
  id: number,
  setState: Dispatch<SetStateAction<CTClass | null>>
) {
  const newClass = await fetch(`http://localhost:3000/api/classes/${id}`);

  const parsedClass = await newClass.json();

  setState(parsedClass);
}

export async function getAllClasses(
  email: string,
  setState: Dispatch<SetStateAction<CTClass[] | null>>
) {
  const allClasses = await fetch(`http://localhost:3000/api/teachers/${email}`);
  const parsedAllClasses = (await allClasses.json()) as CTClass[];

  setState(parsedAllClasses);
  return parsedAllClasses;
}

export async function postClass(
  name: string,
  yearGroup: string,
  email: string
): Promise<CTClass[]> {
  const classToPost = await fetch("http://localhost:3000/api/classes", {
    method: "POST",
    body: JSON.stringify({ name, yearGroup, email }),
  });
  const updatedClasses = await classToPost.json();
  return updatedClasses.CTClasses;
}

export async function deleteClass(classId: number) {
  const deleteRoute = await fetch(
    `http://localhost:3000/api/classes/${classId}`,
    { method: "DELETE" }
  );

  return deleteRoute.json();
}

export async function postPupil(
  CTClassId: number,
  first_name: string,
  last_name_initials?: string
): Promise<CTClass> {
  const newPupil = await fetch(
    `http://localhost:3000/api/classes/${CTClassId}`,
    {
      method: "POST",
      body: JSON.stringify({ first_name, last_name_initials }),
    }
  );
  const updatedPupilList = await newPupil.json();
  return updatedPupilList;
}

export async function deletePupil(pupilId: number | null) {
  const pupilToDelete = await fetch(
    `http://localhost:3000/api/pupils/${pupilId}`,
    { method: "DELETE" }
  );
  const updatedClass: CTClass = await pupilToDelete.json();
  const updatedPupils = updatedClass.pupils.filter((pupil) => {
    return pupil.id !== pupilId;
  });
  updatedClass.pupils = updatedPupils;
  return updatedClass;
}

export async function postManyPupils(
  CTClassId: number,
  pupils: { first_name: string; last_name_initials?: string }[]
) {
  const newPupils = await fetch(
    `http://localhost:3000/api/classes/${CTClassId}/many`,
    {
      method: "POST",
      body: JSON.stringify(pupils),
    }
  );

  return newPupils.json().then((updatedClass) => {
    return updatedClass;
  });
}
