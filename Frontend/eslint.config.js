import tseslint from "typescript-eslint";
import react from "@eslint-react/eslint-plugin";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
    },
    rules: {},
  },
];
