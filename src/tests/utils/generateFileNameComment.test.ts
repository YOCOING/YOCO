import { generateFileNameComment } from "../../utils/generateFileNameComment";

describe("generateFileNameComment Function Tests", () => {
  test("JavaScript comment", () => {
    expect(generateFileNameComment("javascript", "This is a JavaScript comment")).toBe(
      "// This is a JavaScript comment"
    );
  });

  test("Python comment", () => {
    expect(generateFileNameComment("python", "This is a Python comment")).toBe(
      "# This is a Python comment"
    );
  });

  test("HTML comment", () => {
    expect(generateFileNameComment("html", "This is an HTML comment")).toBe(
      "<!-- This is an HTML comment -->"
    );
  });

  test("CSS comment", () => {
    expect(generateFileNameComment("css", "This is a CSS comment")).toBe(
      "/* This is a CSS comment */"
    );
  });

  test("SQL comment", () => {
    expect(generateFileNameComment("sql", "This is an SQL comment")).toBe(
      "-- This is an SQL comment"
    );
  });

  test("Error on JSON", () => {
    expect(() => generateFileNameComment("json", "This should throw an error")).toThrow(
      "JSON does not support comments."
    );
  });

  test("Plain text returns unchanged text", () => {
    expect(generateFileNameComment("plaintext", "This is plain text")).toBe("This is plain text");
  });
});
