import {
  commaNames,
  detectPupils,
  newLineNames,
  spaceRemover,
  tabbedNames,
} from "../app/(app)/utils/functions";

describe("spaceRemover", () => {
  test("should return the original string if it has no spaces", () => {
    const output = spaceRemover("Boba");
    expect(output).not.toContain(" ");
    expect(output).toBe("Boba");
  });
  test("should remove any trailing spaces", () => {
    const output1 = spaceRemover("Boba ");
    expect(output1).not.toContain(" ");
    expect(output1).toBe("Boba");
    const output2 = spaceRemover("Boba    ");
    expect(output2).not.toContain(" ");
    expect(output2).toBe("Boba");
  });
  test("should remove any leading spaces", () => {
    const output1 = spaceRemover(" Boba");
    expect(output1).not.toContain(" ");
    expect(output1).toBe("Boba");
    const output2 = spaceRemover("     Boba");
    expect(output2).not.toContain(" ");
    expect(output2).toBe("Boba");
  });
  test("should remove any leading and trailing spaces", () => {
    const output1 = spaceRemover(" Boba ");
    expect(output1).not.toContain(" ");
    expect(output1).toBe("Boba");
    const output2 = spaceRemover("     Boba     ");
    expect(output2).not.toContain(" ");
    expect(output2).toBe("Boba");
  });
  test("should return an empty string if given an empty string", () => {
    const output1 = spaceRemover("");
    expect(output1).toBe("");
  });
});

describe("newLineNames", () => {
  //happy path
  const newLineInput = "Zohaib\nMassimo\nJenson\nCaitlin Armadillo";
  const pupilOutput = newLineNames(newLineInput);
  test("should return an array of objects", () => {
    expect(Array.isArray(pupilOutput)).toBe(true);
    expect(typeof pupilOutput[0]).toBe("object");
    expect(pupilOutput).toHaveLength(4);
  });
  test("each object should have a first_name property", () => {
    pupilOutput.forEach((pupilObject) => {
      expect(pupilObject).toHaveProperty("first_name");
    });
  });
  test("pupil objects should have a last_name_initials if a last name is present", () => {
    expect(pupilOutput[3]).toHaveProperty("last_name_initials");
    expect(pupilOutput[0]).not.toHaveProperty("last_name_initials");
  });
  test("pupil's second names should be truncated to a single capitalised letter", () => {
    expect(pupilOutput[3].last_name_initials).toBe("A");
    expect(pupilOutput[3].last_name_initials).toHaveLength(1);
    expect(pupilOutput[3].last_name_initials?.toUpperCase()).toBe(
      pupilOutput[3].last_name_initials
    );
  });

  //sad path
  test("should ignore any words after an initial space is already found", () => {
    const unexpectedInput =
      "Zohaib\nMassimo French Sandwich\nJenson\nCaitlin Armadillo";
    const output = newLineNames(unexpectedInput);
    expect(output[1]).toMatchObject({
      first_name: "Massimo",
      last_name_initials: "F",
    });
  });
  test("should work as expected if given numbers in the string", () => {
    const unexpectedInput = "1Zohaib\nMassimo 2\nJenson\nCaitlin Armadillo";
    const output = newLineNames(unexpectedInput);
    expect(output[0]).toMatchObject({
      first_name: "1Zohaib",
    });
  });
  test("should work as expected with leading spaces", () => {
    const unexpectedInput = " Zohaib\n Massimo\n Jenson\n Caitlin Armadillo";
    const output = newLineNames(unexpectedInput);
    expect(output[1]).toMatchObject({
      first_name: "Massimo",
    });
    output.forEach((pupil) => {
      expect(pupil[0]).not.toBe(" ");
    });
  });
  test("should work as expected with trailing spaces", () => {
    const unexpectedInput = "Zohaib \nMassimo \nJenson \nCaitlin Armadillo ";
    const output = newLineNames(unexpectedInput);
    expect(output[1]).toMatchObject({
      first_name: "Massimo",
    });
    output.forEach((pupil) => {
      expect(pupil.first_name.includes(" ")).toBe(false);
    });
  });
  test("should work as expected with leading and trailing spaces", () => {
    const unexpectedInput = "Zohaib\n Massimo \nJenson\nCaitlin Armadillo";
    const output = newLineNames(unexpectedInput);
    expect(output[1]).toMatchObject({
      first_name: "Massimo",
    });
  });
  test("should work as expected with multiple spaces between first and last names", () => {
    const unexpectedInput = "Zohaib\nMassimo\nJenson\nCaitlin    Armadillo";
    const output = newLineNames(unexpectedInput);
    expect(output[3]).toMatchObject({
      first_name: "Caitlin",
      last_name_initials: "A",
    });
  });
});

describe("commaNames", () => {
  const commaInput = "Johnny, Sue, Reed, Ben Grimm";
  const pupilOutput = commaNames(commaInput);
  test("should return an array of objects", () => {
    expect(Array.isArray(pupilOutput)).toBe(true);
    expect(typeof pupilOutput[0]).toBe("object");
    expect(pupilOutput).toHaveLength(4);
  });
  test("each object should have a first_name property", () => {
    pupilOutput.forEach((pupilObject) => {
      expect(pupilObject).toHaveProperty("first_name");
    });
  });
  test("pupil objects should have a last_name_initials if a last name is present", () => {
    expect(pupilOutput[3]).toHaveProperty("last_name_initials");
    expect(pupilOutput[0]).not.toHaveProperty("last_name_initials");
  });
  test("pupil's second names should be truncated to a single capitalised letter", () => {
    expect(pupilOutput[3].last_name_initials).toBe("G");
    expect(pupilOutput[3].last_name_initials).toHaveLength(1);
    expect(pupilOutput[3].last_name_initials?.toUpperCase()).toBe(
      pupilOutput[3].last_name_initials
    );
  });

  //sad path
  test("should ignore any words after an initial space is already found", () => {
    const unexpectedInput = "Johnny Storm Esquire, Sue, Reed, Ben Grimm";
    const output = commaNames(unexpectedInput);
    expect(output[0]).toMatchObject({
      first_name: "Johnny",
      last_name_initials: "S",
    });
  });
  test("should work as expected if given numbers in the string", () => {
    const unexpectedInput = "Johnny10, Sue, Reed, Ben Grimm";
    const output = commaNames(unexpectedInput);
    expect(output[0]).toMatchObject({
      first_name: "Johnny10",
    });
  });
  test("should work as expected with extra leading spaces", () => {
    const unexpectedInput = "Johnny, Sue,  Reed, Ben Grimm";
    const output = commaNames(unexpectedInput);
    expect(output[2]).toMatchObject({
      first_name: "Reed",
    });
    output.forEach((pupil) => {
      expect(pupil[0]).not.toBe(" ");
    });
  });
  test("should work as expected with trailing spaces", () => {
    const unexpectedInput = "Johnny, Sue, Reed , Ben Grimm";
    const output = commaNames(unexpectedInput);
    expect(output[2]).toMatchObject({
      first_name: "Reed",
    });
    output.forEach((pupil) => {
      expect(pupil.first_name.includes(" ")).toBe(false);
    });
  });
  test("should work as expected with leading and trailing spaces", () => {
    const unexpectedInput = "Johnny, Sue,  Reed  , Ben Grimm";
    const output = commaNames(unexpectedInput);
    expect(output[2]).toMatchObject({
      first_name: "Reed",
    });
  });
  test("should work as expected with multiple spaces between first and last names", () => {
    const unexpectedInput = "Johnny, Sue, Reed, Ben   Grimm";
    const output = commaNames(unexpectedInput);
    expect(output[3]).toMatchObject({
      first_name: "Ben",
      last_name_initials: "G",
    });
  });
});

describe("tabbedNames", () => {
  const tabbedInput =
    "Massimo\tAlbanian\nJenson\tAlldatjazz\nLily\tBeck\nMatthew\tBlue";
  const pupilOutput = tabbedNames(tabbedInput);
  test("should return an array of objects", () => {
    expect(Array.isArray(pupilOutput)).toBe(true);
    expect(typeof pupilOutput[0]).toBe("object");
    expect(pupilOutput).toHaveLength(4);
  });
  test("each object should have a first_name property", () => {
    pupilOutput.forEach((pupilObject) => {
      expect(pupilObject).toHaveProperty("first_name");
    });
  });
  test("pupil objects should have a last_name_initials if a last name is present", () => {
    pupilOutput.forEach((pupil) => {
      expect(pupil).toHaveProperty("last_name_initials");
    });
  });
  test("pupil's second names should be truncated to a single capitalised letter", () => {
    expect(pupilOutput[3].last_name_initials).toBe("B");
    expect(pupilOutput[3].last_name_initials).toHaveLength(1);
    expect(pupilOutput[3].last_name_initials?.toUpperCase()).toBe(
      pupilOutput[3].last_name_initials
    );
  });

  //sad path
  test("should ignore any words after an initial tab is already found", () => {
    const unexpectedInput =
      "Massimo\tAlbanian\tNotpartofthename\nJenson\tAlldatjazz\nLily\tBeck\nMatthew\tBlue";
    const output = tabbedNames(unexpectedInput);
    expect(output[0]).toMatchObject({
      first_name: "Massimo",
      last_name_initials: "A",
    });
  });
  test("should work as expected if given numbers in the string", () => {
    const unexpectedInput =
      "Massimo\tAlbanian\nJenson26\tAlldatjazz\nLily\tBeck\nMatthew\tBlue";
    const output = tabbedNames(unexpectedInput);
    expect(output[1]).toMatchObject({
      first_name: "Jenson26",
      last_name_initials: "A",
    });
  });
  test("should work as expected with leading spaces", () => {
    const unexpectedInput =
      "Massimo\t Albanian\nJenson\tAlldatjazz\n Lily\tBeck\nMatthew\tBlue";
    const output = tabbedNames(unexpectedInput);
    expect(output[2]).toMatchObject({
      first_name: "Lily",
      last_name_initials: "B",
    });
    expect(output[0]).toMatchObject({
      first_name: "Massimo",
      last_name_initials: "A",
    });
    output.forEach((pupil) => {
      expect(pupil[0]).not.toBe(" ");
    });
  });
  test("should work as expected with trailing spaces", () => {
    const unexpectedInput =
      "Massimo \tAlbanian\nJenson\tAlldatjazz \nLily\tBeck\nMatthew\tBlue";
    const output = tabbedNames(unexpectedInput);
    expect(output[0]).toMatchObject({
      first_name: "Massimo",
      last_name_initials: "A",
    });
    expect(output[1]).toMatchObject({
      first_name: "Jenson",
      last_name_initials: "A",
    });
    output.forEach((pupil) => {
      expect(pupil.first_name.includes(" ")).toBe(false);
    });
  });
  test("should work as expected with leading and trailing spaces", () => {
    const unexpectedInput =
      "Massimo\t Albanian \nJenson\tAlldatjazz\nLily\tBeck\n Matthew \tBlue";
    const output = tabbedNames(unexpectedInput);
    expect(output[0]).toMatchObject({
      first_name: "Massimo",
      last_name_initials: "A",
    });
    expect(output[3]).toMatchObject({
      first_name: "Matthew",
      last_name_initials: "B",
    });
  });
});

describe("detectPupils", () => {
  test("should correctly convert a list of tabbed pupil names", () => {
    const tabbedPupils =
      "Massimo\tAlbanian\nJenson\tAlldatjazz\nLily\tBeck\nMatthew\tBlue";
    const output = detectPupils(tabbedPupils);
    expect(output[0]).toMatchObject({
      first_name: "Massimo",
      last_name_initials: "A",
    });
    output.forEach((pupil) => {
      expect(pupil).toHaveProperty("first_name");
    });
  });
  test("should correctly convert a list of new line pupil names", () => {
    const tabbedPupils = "Massimo\nJenson\nLily\nMatthew Blue";
    const output = detectPupils(tabbedPupils);
    expect(output[3]).toMatchObject({
      first_name: "Matthew",
      last_name_initials: "B",
    });
    output.forEach((pupil) => {
      expect(pupil).toHaveProperty("first_name");
    });
  });
  test("should correctly convert a list of comma seperated pupil names", () => {
    const tabbedPupils = "Massimo, Jenson, Lily, Matthew Blue";
    const output = detectPupils(tabbedPupils);
    expect(output[3]).toMatchObject({
      first_name: "Matthew",
      last_name_initials: "B",
    });
    output.forEach((pupil) => {
      expect(pupil).toHaveProperty("first_name");
    });
  });
});
