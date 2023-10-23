import { newLineNames } from "../app/(app)/utils/functions";

describe("newLineNames", () => {
  //happy path
  const pupilInput = "Zohaib\nMassimo\nJenson\nCaitlin Armadillo";
  const pupilOutput = newLineNames(pupilInput);
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
});
