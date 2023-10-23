import { formatName } from "../app/(app)/utils/functions";

describe("formatName", () => {
  test("combines two strings correctly", () => {
    expect(formatName("Mr", "Mercury")).toBe("Mr Mercury");
  });
});
