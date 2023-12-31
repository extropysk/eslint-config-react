module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "simple-import-sort", "prettier", "jsx-a11y"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/exports": "warn",
  },
  overrides: [
    // Typescript related rules
    {
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },

      rules: {
        // We should absolutely avoid using ts-ignore, but it"s not always possible.
        // particular when a dependencies types are incorrect.
        "@typescript-eslint/ban-ts-comment": [
          "warn",
          { "ts-ignore": "allow-with-description" },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
};
