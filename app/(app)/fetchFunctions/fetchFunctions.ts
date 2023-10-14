import { Dispatch, SetStateAction } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getSingleClass(
  id: number,
  setState: Dispatch<SetStateAction<CTClass | null>>
) {
  const newClass = await fetch(`${baseUrl}/classes/${id}`);

  const parsedClass = await newClass.json();

  setState(parsedClass);
}

export async function getAllClasses(
  email: string,
  setState: Dispatch<SetStateAction<CTClass[] | null>>
) {
  const allClasses = await fetch(`${baseUrl}/teachers/${email}`);
  const parsedAllClasses = (await allClasses.json()) as CTClass[];

  setState(parsedAllClasses);
  return parsedAllClasses;
}

export async function postClass(
  name: string,
  yearGroup: string,
  email: string
): Promise<CTClass[]> {
  const classToPost = await fetch(`${baseUrl}/classes`, {
    method: "POST",
    body: JSON.stringify({ name, yearGroup, email }),
  });
  const updatedClasses = await classToPost.json();
  return updatedClasses.CTClasses;
}

export async function deleteClass(classId: number) {
  const deleteRoute = await fetch(`${baseUrl}/classes/${classId}`, {
    method: "DELETE",
  });

  return deleteRoute.json();
}

export async function postPupil(
  CTClassId: number,
  first_name: string,
  last_name_initials?: string
): Promise<CTClass> {
  const newPupil = await fetch(`${baseUrl}classes/${CTClassId}`, {
    method: "POST",
    body: JSON.stringify({ first_name, last_name_initials }),
  });
  const updatedPupilList = await newPupil.json();
  return updatedPupilList;
}

export async function deletePupil(pupilId: number | null) {
  const pupilToDelete = await fetch(`${baseUrl}/pupils/${pupilId}`, {
    method: "DELETE",
  });
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
  const newPupils = await fetch(`${baseUrl}/classes/${CTClassId}/many`, {
    method: "POST",
    body: JSON.stringify(pupils),
  });

  return newPupils.json().then((updatedClass) => {
    return updatedClass;
  });
}

export async function updatePupil(
  pupilId: number,
  first_name: string,
  last_name_initials?: string
) {
  const updatedPupil = await fetch(`${baseUrl}/pupils/${pupilId}`, {
    method: "PATCH",
    body: JSON.stringify({ first_name, last_name_initials }),
  });

  return updatedPupil.json().then((updatedPupil: Pupil) => {
    return updatedPupil.CTClass;
  });
}
