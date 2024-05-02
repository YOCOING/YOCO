import assert from "assert";
import { generateFileNameComment } from "../../utils/generateFileNameComment";

describe("generateFileNameComment", function () {
  const testCases: Record<
    string,
    { languageId: string; fileIdentifier: string; expectedComment: string }
  > = {
    javascript: {
      languageId: "javascript",
      fileIdentifier: "example.js",
      expectedComment: "// example.js",
    },
    python: { languageId: "python", fileIdentifier: "example.py", expectedComment: "# example.py" },
    html: {
      languageId: "html",
      fileIdentifier: "example.html",
      expectedComment: "<!-- example.html -->",
    },
    css: { languageId: "css", fileIdentifier: "example.css", expectedComment: "/* example.css */" },
    latex: { languageId: "latex", fileIdentifier: "example.tex", expectedComment: "% example.tex" },
    plaintext: {
      languageId: "plaintext",
      fileIdentifier: "example.txt",
      expectedComment: "example.txt",
    },
    unrecognized: {
      languageId: "nonexistent-language",
      fileIdentifier: "example.unknown",
      expectedComment: "// example.unknown",
    },
  };

  Object.values(testCases).forEach(({ languageId, fileIdentifier, expectedComment }) => {
    it(`should return correct comment format for ${languageId}`, function () {
      assert.strictEqual(generateFileNameComment(languageId, fileIdentifier), expectedComment);
    });
  });
});
