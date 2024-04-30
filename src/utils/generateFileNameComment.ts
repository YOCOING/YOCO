/**
 * Generates a comment with file name and prefix/suffix based on the given language identifier.
 * @param languageId VSCode Language Identifier (https://code.visualstudio.com/docs/languages/identifiers)
 * @param fileIdentifier File name or file path
 * @returns Comment with file name and prefix/suffix based on the given language identifier
 */
export function generateFileNameComment(languageId: string, fileIdentifier: string): string {
  let comment: string;

  switch (languageId) {
    case "abap":
      comment = `" ${fileIdentifier}`;
      break;
    case "bat":
      comment = `REM ${fileIdentifier}`;
      break;
    case "bibtex":
    case "latex":
    case "tex":
      comment = `% ${fileIdentifier}`;
      break;
    case "clojure":
      comment = `;; ${fileIdentifier}`;
      break;
    case "coffeescript":
    case "perl":
    case "python":
    case "r":
    case "ruby":
    case "shellscript":
    case "yaml":
      comment = `# ${fileIdentifier}`;
      break;
    case "c":
    case "cpp":
    case "csharp":
    case "cuda-cpp":
    case "d":
    case "go":
    case "groovy":
    case "java":
    case "javascript":
    case "javascriptreact":
    case "json": // Normally, JSON doesn't support comments, but provided for completeness
    case "jsonc":
    case "objective-c":
    case "objective-cpp":
    case "rust":
    case "swift":
    case "typescript":
    case "typescriptreact":
      comment = `// ${fileIdentifier}`;
      break;
    case "css":
    case "less":
    case "scss":
    case "stylus":
      comment = `/* ${fileIdentifier} */`;
      break;
    case "dockercompose":
    case "dockerfile":
    case "erlang":
    case "git-commit":
    case "git-rebase":
    case "ini":
    case "makefile":
    case "powershell":
      comment = `# ${fileIdentifier}`;
      break;
    case "html":
    case "markdown":
    case "svelte":
    case "vue":
    case "vue-html":
    case "xml":
    case "xsl":
      comment = `<!-- ${fileIdentifier} -->`;
      break;
    case "haml":
    case "pug":
    case "slim":
      comment = `// ${fileIdentifier}`;
      break;
    case "fsharp":
    case "haskell":
    case "ocaml":
      comment = `(* ${fileIdentifier} *)`;
      break;
    case "handlebars":
      comment = `{{!-- ${fileIdentifier} --}}`;
      break;
    case "lua":
      comment = `-- ${fileIdentifier}`;
      break;
    case "razor":
      comment = `@* ${fileIdentifier} *@`;
      break;
    case "sql":
      comment = `-- ${fileIdentifier}`;
      break;
    case "vb":
      comment = `' ${fileIdentifier}`;
      break;
    case "shaderlab":
      comment = `// ${fileIdentifier}`;
      break;
    case "plaintext":
      comment = fileIdentifier; // Plain text has no comment syntax
      break;
    default:
      comment = `// ${fileIdentifier}`; // Default comment style
      break;
  }

  return comment;
}
