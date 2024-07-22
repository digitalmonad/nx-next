import { http, HttpResponse } from 'msw';
import type { Meta, StoryObj } from '@storybook/react';

import Page from './page';
import { chartData } from './line-chart/line-chart-mock-data';

const meta: Meta<typeof Page> = {
  title: 'SSR Page',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const SSRPage: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/chart', () => {
          return HttpResponse.json(chartData);
        }),
      ],
    },
  },
};
