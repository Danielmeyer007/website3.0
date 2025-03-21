import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import { ESLint } from 'eslint';


export default new ESLint({
    baseConfig: {
      extends: [
        'next',
        'next/core-web-vitals',
  ],
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
