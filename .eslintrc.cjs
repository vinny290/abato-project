module.exports = {
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-namespace": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/prefer-named-export": "off",
    "import/no-default-export": "error",
    "react/jsx-props-no-spreading": "off",
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ["dist/*", "src/shared/ui/legacy_components/*"],
  env: { browser: true, es2020: true, node: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.eslint.json"],
  },
  settings: {
    react: { version: "detect" },
  },
  plugins: ["react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.stories.tsx", "vite.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
