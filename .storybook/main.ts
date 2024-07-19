import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../modules/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    '@storybook/addon-interactions',
    'storybook-msw-addon',
  ],
  env: (config) => ({
    ...config,
    STORYBOOK_CI: process.env.STORYBOOK_CI as string,
  }),
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ['../public'],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
