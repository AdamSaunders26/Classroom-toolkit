export const guestAllClasses: CTClass[] = [
  {
    id: 0,
    name: "Kestrels",
    yearGroup: "5",
    teacherId: "guest",
    pupils: [],
  },
  {
    id: 1,
    name: "Acer",
    yearGroup: "3",
    teacherId: "guest",
    pupils: [],
  },
];

export const guestTeacher: Teacher = {
  id: "guest",
  name: "Professor Guest",
  email: "contact@adam-saunders.dev",
  emailVerified: null,
  image: null,
  CTClasses: guestAllClasses,
};
