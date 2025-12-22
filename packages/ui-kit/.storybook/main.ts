import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ['@vueless/storybook-dark-mode'],
  "framework": "@storybook/react-vite"
};
export default config;