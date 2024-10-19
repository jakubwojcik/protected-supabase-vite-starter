import js from "@eslint/js";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/*"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
      "sort-keys-fix": sortKeysFix,
      "no-relative-import-paths": noRelativeImportPaths,
      perfectionist,
      "sort-destructure-keys": sortDestructureKeys,
      "simple-import-sort": simpleImportSort,
      unusedImports,
    },
    rules: {
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-sort-props": [
        "error",
        {
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...prettier.configs.recommended.rules,
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { allowSameFolder: true, rootDir: "src", prefix: "@" },
      ],
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: true, natural: false, minKeys: 2 },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          partitionByComment: false,
          partitionByNewLine: false,
        },
      ],
      "sort-destructure-keys/sort-destructure-keys": [
        "error",
        { caseSensitive: false },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
);
