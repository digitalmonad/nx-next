// eslint-disable-next-line
import '../src/app/app.css';
// @ts-expect-error Unknown cause of import error
import { initialize, mswLoader } from 'storybook-msw-addon';

import type { Preview } from '@storybook/react';
import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
});

// Initialize MSW
initialize({
  serviceWorker: { url: '/apiMockServiceWorker.js' },
});

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <div className={`${fontSans.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
