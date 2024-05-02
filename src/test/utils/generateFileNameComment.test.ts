import assert from "assert";
import { generateFileNameComment } from "../../utils/generateFileNameComment";

describe("generateFileNameComment()", () => {
  it("should generate correct comment for JavaScript", () => {
    const result = generateFileNameComment("javascript", "example.js");
    assert.strictEqual(result, "// example.js");
  });

  it("should generate correct comment for Python", () => {
    const result = generateFileNameComment("python", "example.py");
    assert.strictEqual(result, "# example.py");
  });

  it("should generate correct comment for C++", () => {
    const result = generateFileNameComment("cpp", "example.cpp");
    assert.strictEqual(result, "// example.cpp");
  });

  it("should generate correct comment for HTML", () => {
    const result = generateFileNameComment("html", "example.html");
    assert.strictEqual(result, "<!-- example.html -->");
  });

  it("should generate correct comment for CSS", () => {
    const result = generateFileNameComment("css", "example.css");
    assert.strictEqual(result, "/* example.css */");
  });

  it("should handle plaintext without comment syntax", () => {
    const result = generateFileNameComment("plaintext", "example.txt");
    assert.strictEqual(result, "example.txt");
  });

  it("should generate correct comment for SQL", () => {
    const result = generateFileNameComment("sql", "example.sql");
    assert.strictEqual(result, "-- example.sql");
  });

  it("should generate correct comment for Bat scripts", () => {
    const result = generateFileNameComment("bat", "example.bat");
    assert.strictEqual(result, "REM example.bat");
  });

  it("should return default comment for unsupported language", () => {
    const result = generateFileNameComment("unsupported-language", "example.unknown");
    assert.strictEqual(result, "// example.unknown");
  });

  it("should generate correct comment for JSONC", () => {
    const result = generateFileNameComment("jsonc", "example.jsonc");
    assert.strictEqual(result, "// example.jsonc");
  });
});
