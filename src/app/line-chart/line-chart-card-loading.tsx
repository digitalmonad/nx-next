import { LoaderCircle } from 'lucide-react';
import {
  chartConfig,
  LineChartCardTemplate,
  SwitchButton,
} from './line-chart-card-template';
import { Skeleton } from '@nx-next/shared-ui/components/skeleton';

export function LineChartCardLoading() {
  return (
    <LineChartCardTemplate
      title={'Bar Chart - Interactive'}
      subtitle={
        <Skeleton className="w-[200px]">
          <span className="opacity-0">{'...'}</span>
        </Skeleton>
      }
      switchButtons={['desktop', 'mobile'].map((key) => {
        const label = key as keyof typeof chartConfig;
        return (
          <SwitchButton
            key={label}
            label={label}
            value={
              <Skeleton>
                <span className="opacity-0">{'...'}</span>
              </Skeleton>
            }
          />
        );
      })}
      chart={
        <Skeleton className="flex h-full w-full items-center justify-center">
          <LoaderCircle className="animate-spin text-primary" />
        </Skeleton>
      }
    />
  );
}
