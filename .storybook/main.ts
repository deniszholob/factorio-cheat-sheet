import { StorybookConfig } from '@storybook/angular';

const storyFiles = '*.stories.@(js|jsx|ts|tsx|mdx)';
const config: StorybookConfig = {
  stories: [`../src/**/${storyFiles}`, `./**${storyFiles}`],
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    enabled: true,
    docsPage: 'automatic',
  },
};

module.exports = config;
