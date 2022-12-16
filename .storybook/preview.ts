import { setCompodocJson } from '@storybook/addon-docs/angular';
import { Parameters } from '@storybook/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  background: { default: 'light' },
};
