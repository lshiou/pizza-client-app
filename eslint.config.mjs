import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import pluginQuery from "@tanstack/estlint-plugin-query";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...pluginQuery.configs["flat/recommended"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // for fixing the error of not importing React in JSX files
  reactPlugin.configs.flat["jsx-runtime"],
  ...reactPlugin.configs.flat.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    },
  },
  prettier,
];
