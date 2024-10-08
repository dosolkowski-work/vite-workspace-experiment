import globals from "globals";
import pluginA11y from "eslint-plugin-jsx-a11y";
import pluginImport from "eslint-plugin-import-x";
import pluginJestDom from "eslint-plugin-jest-dom";
import pluginJs from "@eslint/js";
import pluginReact from "@eslint-react/eslint-plugin";
import pluginReactCompiler from "eslint-plugin-react-compiler";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginRefresh from "eslint-plugin-react-refresh";
import pluginSort from "@j4cobi/eslint-plugin-sort-imports";
import pluginTanstack from "@tanstack/eslint-plugin-query";
import pluginVitest from "@vitest/eslint-plugin";
import tseslint from "typescript-eslint";

//TODO: re-add eslint-plugin-testing-library when compatible: https://github.com/testing-library/eslint-plugin-testing-library/issues/899

export default tseslint.config(
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    {
        ignores: ["**/dist/**/*", "eslint.config.js", "vite.config.ts", "vitest.workspace.ts"],
    },
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        settings: {
            react: { version: "18.3" },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    pluginImport.flatConfigs.recommended,
    pluginImport.flatConfigs.typescript,
    pluginReact.configs["recommended-type-checked"],
    pluginA11y.flatConfigs.strict,
    ...pluginTanstack.configs["flat/recommended"],
    {
        rules: {
            "@typescript-eslint/consistent-type-exports": "error",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/method-signature-style": ["error", "property"],
            "@typescript-eslint/no-confusing-void-expression": "off", // not actually confusing
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-non-null-assertion": "off", // too many false positives
            "@typescript-eslint/no-unnecessary-type-parameters": "off", // false positives or even just wrong
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allowNumber: true,
                },
            ],
            "import-x/newline-after-import": "error",
            "import-x/no-amd": "error",
            "import-x/no-anonymous-default-export": "error",
            "import-x/no-commonjs": "error",
            "import-x/no-unresolved": "off", // TypeScript will do this; ESLint Import doesn't understand all our tsconfig paths
            "import-x/no-useless-path-segments": [
                "error",
                {
                    noUselessIndex: true,
                },
            ],
        },
    },
    {
        plugins: { "react-refresh": pluginRefresh },
        rules: {
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        },
    },
    {
        plugins: { "react-hooks": pluginReactHooks },
        rules: pluginReactHooks.configs.recommended.rules,
    },
    {
        plugins: { "react-compiler": pluginReactCompiler },
        rules: {
            "react-compiler/react-compiler": "error",
        },
    },
    {
        // ESLint has a built-in sort-imports rule, but it treats a destructured import with one item the same as just
        // a default import. In other words, it thinks this:
        //     import foo from "some-foo";
        // is the same structure as:
        //     import { bar } from "some-bar";
        // and tries to mix them for sorting purposes--and more importantly, it considers both of them *different* from:
        //     import { bar, moreBar } from "some-bar";
        //
        // This is confusing. We prefer to group 'destructured imports with one item' together with 'destructured imports
        // with more than one item', rather than with 'non-destructured default imports'. Therefore we have to use a
        // plug-in, instead of the default rule.
        // See https://stackoverflow.com/questions/65405078/eslint-sort-imports-mixing-single-and-multiple
        plugins: { "eslint-plugin-sort-imports": pluginSort },
        rules: {
            "eslint-plugin-sort-imports/sort-imports": "error",
        },
    },
    {
        files: ["**/*.test.*", "**/_test/**"],
        plugins: {
            ...pluginJestDom.configs["flat/recommended"].plugins,
            ...pluginVitest.configs.recommended.plugins,
        },
        rules: {
            ...pluginJestDom.configs["flat/recommended"].rules,
            ...pluginVitest.configs.recommended.rules,
            "@typescript-eslint/no-unsafe-assignment": "off", // too many false positives in expect.toHaveBeenCalledWith
            "vitest/consistent-test-it": "error",
            "vitest/no-conditional-tests": "error",
            "vitest/no-disabled-tests": "error",
            "vitest/no-duplicate-hooks": "error",
            "vitest/no-focused-tests": "warn", // fine to use temporarily but we want it to be obvious if accidentally committed
            "vitest/no-test-return-statement": "error",
            "vitest/prefer-comparison-matcher": "error",
            "vitest/prefer-each": "error",
            "vitest/prefer-equality-matcher": "error",
            "vitest/prefer-hooks-in-order": "error",
            "vitest/prefer-hooks-on-top": "error",
            "vitest/prefer-mock-promise-shorthand": "error",
            "vitest/prefer-spy-on": "error",
            "vitest/prefer-to-contain": "error",
            "vitest/prefer-to-have-length": "error",
            "vitest/prefer-todo": "error",
        },
    },
);
