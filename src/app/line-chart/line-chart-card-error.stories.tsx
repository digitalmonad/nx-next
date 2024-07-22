import type { Meta, StoryObj } from '@storybook/react';

import { LineChartCardError } from './line-chart-card-error';

const meta: Meta<typeof LineChartCardError> = {
  title: 'Line Chart Card/Error',
  component: LineChartCardError,
};

export default meta;
type Story = StoryObj<typeof LineChartCardError>;

export const Error: Story = {
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
