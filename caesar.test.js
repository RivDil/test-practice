const caesar = require("./caesar");

describe("Caesar Cipher", () => {
  test("Shifts letters by the specified amount", () => {
    expect(caesar("hello", 3)).toBe("khoor");
  });

  test("Works with a negative shift value", () => {
    expect(caesar("khoor", -3)).toBe("hello");
  });

  test("Preserves case", () => {
    expect(caesar("Hello World", 5)).toBe("Mjqqt Btwqi");
  });

  test("Wraps around the alphabet", () => {
    expect(caesar("xyz", 5)).toBe("cde");
    expect(caesar("XYZ", 5)).toBe("CDE");
  });
});