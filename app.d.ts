declare global {
  interface Pupil {
    id: number;
    first_name: string;
    last_name: string;
    CTclass: string;
  }

  interface CTClass {
    id: number;
    name: string | null;
    pupils: Pupil[] | null;
    year: number;
    teacher: Teacher;
    teacherId: string;
  }

  interface Teacher {
    id: string;
    title: string;
    first_name: string;
    last_name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    CTClasses: CTClass[];
  }
}
export {};
