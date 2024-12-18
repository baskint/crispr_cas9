import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
};

export const docs = {
  autodocs: true
};
export const addons = ['@storybook/addon-webpack5-compiler-babel', '@chromatic-com/storybook'];

export const framework = {
  name: '@storybook/nextjs',
  options: {}
};

export const typescript = {
  reactDocgen: 'react-docgen-typescript'
};
