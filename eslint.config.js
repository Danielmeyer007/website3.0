import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    js.configs.recommended,
    reactPlugin.configs.recommended,
    typescriptPlugin.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2021,
                sourceType: 'module',
            },
        },
        plugins: [
            'react',
            '@typescript-eslint',
            'jsx-a11y', // Mejora accesibilidad en JSX
        ],
        rules: {
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/explicit-module-boundary-types': 'warn',
            'no-console': 'warn',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'jsx-a11y/alt-text': 'warn', // Asegura accesibilidad en imágenes
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
