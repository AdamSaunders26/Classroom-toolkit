import { Dispatch, SetStateAction } from "react";

export async function getSingleClass(
  CTclassname: string,
  setState: Dispatch<SetStateAction<CTClass | null>>,
  id: number
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

export async function deleteClass(classId: number) {
  const deleteRoute = await fetch(
    `http://localhost:3000/api/classes/${classId}`,
    { method: "DELETE" }
  );
  // deleteRoute.json().then((o) => {
  //   console.log(o);
  // });
  return deleteRoute.json();
}
