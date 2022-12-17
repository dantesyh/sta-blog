module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    semi: [2, "always", { omitLastInOneLineBlock: true }],
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: false }]
  }
};
