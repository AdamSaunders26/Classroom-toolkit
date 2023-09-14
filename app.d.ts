declare global {
  interface Pupil {
    id: number;
    first_name: string;
    last_name: string;
    year: number;
    class: string;
  }

  interface Class {
    name: string;
    pupils: Pupil[];
  }
}

export {};
