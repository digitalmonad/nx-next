import {
  LineChartCardTemplate,
  SwitchButton,
  chartConfig,
} from './line-chart-card-template';

export function LineChartCardError() {
  return (
    <LineChartCardTemplate
      title={'Bar Chart - Interactive'}
      subtitle={'-'}
      switchButtons={['desktop', 'mobile'].map((key) => {
        const label = key as keyof typeof chartConfig;
        return (
          <SwitchButton
            key={label}
            label={label}
            value={<span className="">{'-'}</span>}
          />
        );
      })}
      chart={
        <div className="flex h-full w-full items-center justify-center rounded-md bg-destructive/10 text-destructive">
          Error loading chart data.
        </div>
      }
    />
  );
}
