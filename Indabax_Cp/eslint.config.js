import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react'; // Import the React plugin
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default [
    // Global ignores
    { ignores: ['dist', '.eslintrc.cjs'] },

    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
            parserOptions: { // Add this
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: react, // Add the react plugin to the plugins section
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'import': importPlugin,
        },
        settings: {
            react: {
                version: '18.2',
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules, // Use react.configs
            ...reactHooks.configs.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
             'import/newline-after-import': ['error', { count: 1 }],
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        },
    },
];