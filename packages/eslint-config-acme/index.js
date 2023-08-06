module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  root: true,
};
