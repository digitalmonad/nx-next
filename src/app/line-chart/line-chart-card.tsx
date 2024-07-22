import React from 'react';
import { ChartData } from './line-chart-types';
import { LineChartCardClient } from './line-chart-card-client';

export function LineChartCard({ data }: { data: ChartData }) {
  return <LineChartCardClient data={data} />;
}
