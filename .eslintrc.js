/* eslint-disable no-undef */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  plugins: ["vue"],
  rules: {
    semi: [2, "always", { omitLastInOneLineBlock: true }],
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: false }]
  }
};
