// eslint-disable-next-line
import '../modules/shared/shared-ui/global.css';

import type { Preview } from '@storybook/react';
import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${fontSans.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
