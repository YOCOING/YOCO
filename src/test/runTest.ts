import {
  downloadAndUnzipVSCode,
  resolveCliArgsFromVSCodeExecutablePath,
  runTests,
} from "@vscode/test-electron";
import * as cp from "child_process";
import * as path from "path";

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, "../../../");
    const extensionTestsPath = path.resolve(__dirname, "./utils/index");
    const vscodeExecutablePath = await downloadAndUnzipVSCode("stable");
    const [cliPath, ...args] = resolveCliArgsFromVSCodeExecutablePath(vscodeExecutablePath);

    // TODO: use vsixPath later
    // const vsixPath = path.resolve(extensionDevelopmentPath, "./src/test/yoco.YOCO.vsix");

    cp.spawnSync(cliPath, [...args, "--install-extension", "yoco.YOCO"], {
      encoding: "utf-8",
      stdio: "inherit",
    });

    await runTests({
      vscodeExecutablePath,
      extensionDevelopmentPath,
      extensionTestsPath,
    });
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
