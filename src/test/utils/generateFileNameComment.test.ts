import { generateFileNameComment } from "../../utils/generateFileNameComment";

describe("generateFileNameComment Function", () => {
  it("should generate correct comment for JavaScript", () => {
    const result = generateFileNameComment("javascript", "example.js");
    expect(result).toBe("// example.js");
  });

  it("should generate correct comment for Python", () => {
    const result = generateFileNameComment("python", "example.py");
    expect(result).toBe("# example.py");
  });

  it("should generate correct comment for C++", () => {
    const result = generateFileNameComment("cpp", "example.cpp");
    expect(result).toBe("// example.cpp");
  });

  it("should generate correct comment for HTML", () => {
    const result = generateFileNameComment("html", "example.html");
    expect(result).toBe("<!-- example.html -->");
  });

  it("should generate correct comment for CSS", () => {
    const result = generateFileNameComment("css", "example.css");
    expect(result).toBe("/* example.css */");
  });

  it("should handle plaintext without comment syntax", () => {
    const result = generateFileNameComment("plaintext", "example.txt");
    expect(result).toBe("example.txt");
  });

  it("should generate correct comment for SQL", () => {
    const result = generateFileNameComment("sql", "example.sql");
    expect(result).toBe("-- example.sql");
  });

  it("should generate correct comment for Bat scripts", () => {
    const result = generateFileNameComment("bat", "example.bat");
    expect(result).toBe("REM example.bat");
  });

  it("should return default comment for unsupported language", () => {
    const result = generateFileNameComment("unsupported-language", "example.unknown");
    expect(result).toBe("// example.unknown");
  });

  it("should generate correct comment for JSONC", () => {
    const result = generateFileNameComment("jsonc", "example.jsonc");
    expect(result).toBe("// example.jsonc");
  });
});
