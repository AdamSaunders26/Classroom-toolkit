declare global {
  interface Pupil {
    id: number;
    first_name: string;
    last_name_initials?: string;
    CTClass?: CTClass;
    CTClassId: number;
  }

  interface CTClass {
    id: number;
    name: string;
    pupils: Pupil[];
    yearGroup: string;
    teacher?: Teacher;
    teacherId: string;
  }

  interface Teacher {
    id: string;
    title?: string;
    name: string;
    email: string;
    emailVerified: Date | null;
    CTClasses: CTClass[];
    image: string | null;
  }
}
export {};
