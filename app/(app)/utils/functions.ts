import { log } from "console";

export function formatName(title: string, last_name: string) {
  return `${title} ${last_name}`;
}

export function spaceRemover(name: string) {
  const nameArray = name.split("").filter((letter) => {
    return letter !== " ";
  });

  return nameArray.join("");
}

export function tabbedNames(pupils: string) {
  const pupilArray = pupils.split("\n");
  const pupilObjects = pupilArray.map((pupil) => {
    const nameArray = pupil.split("\t");

    return {
      first_name: spaceRemover(nameArray[0]),
      last_name_initials: spaceRemover(nameArray[1])[0],
    };
  });
  return pupilObjects.filter((pupil) => {
    if (pupil) return pupil;
  });
}

export function newLineNames(pupils: string) {
  const nameArray = pupils.split("\n");
  return nameArray.map((pupil) => {
    const spacelessName = pupil.split(" ");
    const finalName = spacelessName.filter((name) => {
      return name;
    });

    return finalName[1]
      ? { first_name: finalName[0], last_name_initials: finalName[1][0] }
      : { first_name: finalName[0] };
  });
}

export function commaNames(pupils: string) {
  const nameArray = pupils.split(",");

  return nameArray.map((pupil) => {
    const spacelessName = pupil.split(" ");
    const finalName = spacelessName.filter((name) => {
      return name;
    });

    return finalName[1]
      ? { first_name: finalName[0], last_name_initials: finalName[1][0] }
      : { first_name: finalName[0] };
  });
}
export function detectPupils(
  pupils: string
): { first_name: string; last_name_initials?: string }[] {
  if (pupils.includes("\t")) {
    return tabbedNames(pupils);
  } else if (pupils.includes("\n")) {
    return newLineNames(pupils);
  } else {
    return commaNames(pupils);
  }
}
