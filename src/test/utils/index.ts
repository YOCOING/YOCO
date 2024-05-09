import { glob } from "glob";
import Mocha from "mocha";
import * as path from "path";

export function run(): Promise<void> {
  const mocha = new Mocha({
    ui: "tdd",
    color: true,
    require: ["ts-node/register"],
  });

  const testsRoot = path.resolve(__dirname, "..");

  return new Promise((c, e) => {
    glob("**/*.+(test|spec).ts", { cwd: testsRoot }, (err, files) => {
      if (err) {
        return e(err);
      }

      files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

      try {
        mocha.run(failures => {
          if (failures > 0) {
            e(new Error(`${failures} tests failed.`));
          } else {
            c();
          }
        });
      } catch (err) {
        console.error(err);
        e(err);
      }
    });
  });
}
