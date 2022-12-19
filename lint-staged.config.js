import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(" --file ")}`;

export default {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": [buildEslintCommand],

  // Format MarkDown and JSON
  // "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
};
