import { log } from "console";

export function formatName(title: string, last_name: string) {
  return `${title} ${last_name}`;
}

export function tabbedNames(pupils: string) {
  const pupilArray = pupils.split("\n");
  const pupilObjects = pupilArray.map((pupil) => {
    const nameArray = pupil.split("\t");
    return { first_name: nameArray[0], last_name_initials: nameArray[1]?.[0] };
  });
  return pupilObjects.filter((pupil) => {
    if (pupil) return pupil;
  });
}

export function newLineNames(pupils: string) {
  const nameArray = pupils.split("\n");
  return nameArray.map((pupil) => {
    if (pupil.includes(" ") && pupil[0] !== " ") {
      const splitName = pupil.split(" ");
      console.log(splitName);
      return splitName[1] === ""
        ? { first_name: splitName[0] }
        : { first_name: splitName[0], last_name_initials: splitName[1][0] };
    } else {
      if (pupil[0] === " ") {
        return { first_name: pupil.slice(1) };
      } else {
        return { first_name: pupil };
      }
    }
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
