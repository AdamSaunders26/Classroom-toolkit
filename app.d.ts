declare global {
  interface Pupil {
    id: number;
    first_name: string;
    last_name: string;
    year: number;
    CTclass: string;
  }

  interface CTClass {
    name: string;
    pupils: Pupil[];
  }
}

export {};
