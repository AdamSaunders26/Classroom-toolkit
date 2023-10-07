export function formatName(title: string, last_name: string) {
  return `${title} ${last_name}`;
}

//'Zohaib\n'
//'Massimo\tAlbanese\n'

export function detectPupils(pupils: string) {
  const nameArray = pupils.split("\n");
  const nameObjects = nameArray.map((pupil) => {
    if (pupil.includes(" ")) {
      const splitName = pupil.split(" ");
      console.log(splitName);
      return splitName[1] === ""
        ? { first_name: splitName[0] }
        : { first_name: splitName[0], last_name_initials: splitName[1] };
    } else {
      return { first_name: pupil };
    }
  });
  console.log(nameObjects);
  return nameObjects;
}

// detectPupils();
