import { defineConfig } from "@vscode/test-cli";

export default defineConfig({
  label: "sample-test",
  files: ["out/test/**/*.test.js", "src/test/**/*.test.js"],
  mocha: {
    ui: "tdd",
    timeout: 20000,
  },
});
