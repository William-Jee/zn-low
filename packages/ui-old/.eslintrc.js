/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@splash/configs/eslint/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
