import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // 1. Ignore build artifacts and system files
  {
    ignores: ['dist', 'node_modules', 'vite.config.js'],
  },

  // 2. Main configuration for JavaScript and JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // Core ESLint recommended rules
      ...js.configs.recommended.rules,

      // React & Hooks rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, // Disables needing 'import React' in every file
      ...reactHooks.configs.recommended.rules,

      // Accessibility rules (jsx-a11y)
      ...jsxA11y.configs.recommended.rules,

      // Vite fast-refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Custom rule adjustments (Optional)
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off', // Turn off prop-types if you don't use them
    },
    settings: {
      react: {
        version: '19', // Automatically detects your React version
      },
    },
  },

  // 3. Disable all rules that conflict with Prettier (MUST BE LAST)
  eslintConfigPrettier,
]
