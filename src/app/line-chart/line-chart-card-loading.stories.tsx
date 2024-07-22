import type { Meta, StoryObj } from '@storybook/react';

import { LineChartCardLoading } from './line-chart-card-loading';

const meta: Meta<typeof LineChartCardLoading> = {
  title: 'Line Chart Card/Loading',
  component: LineChartCardLoading,
};

export default meta;
type Story = StoryObj<typeof LineChartCardLoading>;

export const Loading: Story = {
  parameters: {},
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
