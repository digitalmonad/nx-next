import { http, HttpResponse } from 'msw';
import type { Meta, StoryObj } from '@storybook/react';

import Page from './page';

const meta: Meta<typeof Page> = {
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const SSRPage: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/user', () => {
          return HttpResponse.json({
            firstName: 'Neil',
            lastName: 'Maverick',
          });
        }),
      ],
    },
  },
};
