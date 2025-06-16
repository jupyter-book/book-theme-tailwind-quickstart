import { globSync } from "glob";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pattern = /"class"\s*:\s*"([^"]+)"|:?class:\s*(.*)$/gm;
const cwd = process.argv[2] ?? ".";
const files = globSync("**/*.md", {
  cwd,
  ignore: ["**/_build/**/*", "**/node_modules/**/*"],
});
const patterns = files
  .map((path) => {
    const data = readFileSync(join(cwd, path), { encoding: "utf-8" });
    return [...data.matchAll(pattern).map((m) => m[1] ?? m[2])];
  })
  .flat();
const body = Array.from(new Set(patterns)).join(" ");
writeFileSync("classnames.txt", body, { encoding: "utf-8" });

