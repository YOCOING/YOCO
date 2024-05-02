/**
 * Generates a comment with file name and prefix/suffix based on the given language identifier.
 * @param languageId VSCode Language Identifier (https://code.visualstudio.com/docs/languages/identifiers)
 * @param fileIdentifier File name or file path
 * @returns Comment with file name and prefix/suffix based on the given language identifier
 */
export function generateFileNameComment(languageId: string, fileIdentifier: string): string {
  const commentStyles: Record<string, string[]> = {
    "double-slash": [
      "c",
      "cpp",
      "csharp",
      "cuda-cpp",
      "d",
      "go",
      "groovy",
      "java",
      "javascript",
      "javascriptreact",
      "jsonc",
      "objective-c",
      "objective-cpp",
      "rust",
      "swift",
      "typescript",
      "typescriptreact",
      "shaderlab",
    ],
    hash: [
      "coffeescript",
      "perl",
      "python",
      "r",
      "ruby",
      "shellscript",
      "yaml",
      "dockercompose",
      "dockerfile",
      "erlang",
      "git-commit",
      "git-rebase",
      "ini",
      "makefile",
      "powershell",
    ],
    "html-like": ["html", "markdown", "svelte", "vue", "vue-html", "xml", "xsl"],
    "multi-line": ["css", "less", "scss", "stylus"],
    percent: ["bibtex", "latex", "tex"],
    semicolon: ["clojure"],
    "lua-style": ["lua"],
    "razor-style": ["razor"],
    "sql-style": ["sql"],
    "vb-style": ["vb"],
    "handlebars-style": ["handlebars"],
    "abap-style": ["abap"],
    "batch-style": ["bat"],
    "fsharp-style": ["fsharp", "haskell", "ocaml"],
    plaintext: ["plaintext"],
  };

  const commentPrefixes: Record<string, string> = {
    "double-slash": `// ${fileIdentifier}`,
    hash: `# ${fileIdentifier}`,
    "html-like": `<!-- ${fileIdentifier} -->`,
    "multi-line": `/* ${fileIdentifier} */`,
    percent: `% ${fileIdentifier}`,
    semicolon: `;; ${fileIdentifier}`,
    "lua-style": `-- ${fileIdentifier}`,
    "razor-style": `@* ${fileIdentifier} *@`,
    "sql-style": `-- ${fileIdentifier}`,
    "vb-style": `' ${fileIdentifier}`,
    "handlebars-style": `{{!-- ${fileIdentifier} --}}`,
    "abap-style": `" ${fileIdentifier}`,
    "batch-style": `REM ${fileIdentifier}`,
    "fsharp-style": `(* ${fileIdentifier} *)`,
    plaintext: fileIdentifier,
  };

  for (const [style, languages] of Object.entries(commentStyles)) {
    if (languages.includes(languageId)) {
      return commentPrefixes[style];
    }
  }

  return `// ${fileIdentifier}`;
}
