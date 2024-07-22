import React from 'react';
import { LineChartCard } from './line-chart/line-chart-card';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const AsyncLineChartCard = async () => {
  let data;

  // check if component is rendered on server or in Storybook browser emulation
  const baseUrl = typeof window === 'undefined' ? 'http://localhost:3000' : '';

  try {
    await delay(2000);
    data = await (await fetch(baseUrl + '/api/chart')).json();
  } catch (error) {
    console.log(error);
    console.log('SSR FETCH ERROR IGNORED ;)');
    return null;
  }

  return <LineChartCard data={data} />;
};
