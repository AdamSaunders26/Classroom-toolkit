export function formatName(title: string, last_name: string) {
  return `${title} ${last_name}`;
}

function tabbedNames(pupils: string) {
  const pupilArray = pupils.split("\n");
  const pupilObjects = pupilArray.map((pupil) => {
    // if (!pupil) return null;

    const nameArray = pupil.split("\t");
    return { first_name: nameArray[0], last_name_initials: nameArray[1]?.[0] };
  });
  return pupilObjects.filter((pupil) => {
    if (pupil) return pupil;
  });
}

function newLineNames(pupils: string) {
  const nameArray = pupils.split("\n");
  return nameArray.map((pupil) => {
    if (pupil.includes(" ")) {
      const splitName = pupil.split(" ");

      return splitName[1] === ""
        ? { first_name: splitName[0] }
        : { first_name: splitName[0], last_name_initials: splitName[1][0] };
    } else {
      return { first_name: pupil };
    }
  });

  // return nameObjects;
}

function commaNames(pupils: string) {
  const nameArray = pupils.split(",");
  return nameArray.map((pupil) => {
    const spacelessName = pupil.split(" ");
    const finalName = spacelessName.filter((name) => {
      return name;
    });
    return { first_name: finalName[0] };
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
