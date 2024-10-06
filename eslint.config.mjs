import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...eslintPluginAstro.configs.recommended,
    {
        ignores: ["cypress/*", "dist/*", "**/cypress.config.ts", "**/vite.config.ts"],
    }, ...compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/strict",
    ), {
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "jsx-a11y": jsxA11Y,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                project: "./tsconfig.json",
            },
        },

        rules: {
            "linebreak-style": "off",
            "object-curly-newline": "off",
            eqeqeq: ["error", "always"],
        },
    }, {
        files: ["**/*.astro"],

        languageOptions: {
            parser: parser,
            ecmaVersion: 5,
            sourceType: "module",

            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },

        rules: {
            "no-tabs": "off",
            "astro/no-conflict-set-directives": "error",
            "astro/no-unused-define-vars-in-style": "error",
        },
    }, {
        files: ["**/*.astro/*.js", "*.astro/*.js"],

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            ecmaVersion: 5,
            sourceType: "module",
        },

        rules: {
            "prettier/prettier": "off",
        },
    }, {
        files: ["**/*.astro/*.ts", "*.astro/*.ts"],

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "module",

            parserOptions: {
                project: null,
            },
        },

        rules: {
            "prettier/prettier": "off",
        },
    },

];