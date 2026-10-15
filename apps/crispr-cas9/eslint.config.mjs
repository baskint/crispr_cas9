import path from 'node:path';
import nx from '@nx/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  nextPlugin.configs['core-web-vitals'],
  ...storybook.configs['flat/recommended'],
  {
    settings: { next: { rootDir: import.meta.dirname } },
  },
  {
    files: ['.storybook/main.@(js|cjs|mjs|ts)'],
    rules: {
      'storybook/no-uninstalled-addons': [
        'error',
        {
          packageJsonLocation: path.join(import.meta.dirname, '../../package.json'),
        },
      ],
    },
  },
  {
    files: ['specs/**/*', '**/*.spec.ts', '**/*.spec.tsx'],
    languageOptions: { globals: { ...globals.jest } },
  },
  {
    ignores: ['**/.next/**', '**/storybook-static/**'],
  },
];
