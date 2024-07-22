'use client';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@nx-next/shared-ui/components/chart';
import {
  chartConfig,
  LineChartCardTemplate,
  SwitchButton,
} from './line-chart-card-template';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import React from 'react';
import { ChartData } from './line-chart-types';

export function LineChartCardClient({ data }: { data: ChartData }) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('desktop');
  const total = React.useMemo(
    () => ({
      desktop: data.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: data.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [data],
  );
  return (
    <LineChartCardTemplate
      title={'Bar Chart - Interactive'}
      subtitle={'Showing total visitors for the last 3 months'}
      switchButtons={['desktop', 'mobile'].map((key) => {
        const chart = key as keyof typeof chartConfig;
        return (
          <SwitchButton
            key={chart}
            label={chart}
            value={total[key as keyof typeof total].toLocaleString('en-US')}
            active={activeChart === chart}
            onClick={() => setActiveChart(chart)}
          />
        );
      })}
      chart={
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      }
    />
  );
}
