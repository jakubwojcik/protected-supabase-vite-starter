import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import perfectionist from "eslint-plugin-perfectionist";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
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
  },
});
