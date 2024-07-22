import type { Meta, StoryObj } from '@storybook/react';

import { LineChartCard } from './line-chart-card';
import { chartData } from './line-chart-mock-data';

const meta: Meta<typeof LineChartCard> = {
  title: 'Line Chart Card/Default',
  component: LineChartCard,
};

export default meta;
type Story = StoryObj<typeof LineChartCard>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/L8mzYa5S6uFvfWpn9CHf51/ShadCN-Charts-v1.0-(Community)?node-id=5-4&t=YtRHVhuKBbEt2ASb-1',
    },
  },
  args: {
    data: chartData,
  },

  decorators: [
    (Story) => (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
