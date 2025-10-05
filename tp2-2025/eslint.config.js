import eslintPluginPrettier from "eslint-plugin-prettier";
import js from "@eslint/js";
import globals from "globals";

// npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      "prettier/prettier": ["error"],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
