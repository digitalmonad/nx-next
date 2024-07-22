import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@nx-next/shared-ui/components/card';
import { ChartConfig } from '@nx-next/shared-ui/components/chart';
import { ReactElement } from 'react';

export const chartConfig = {
  views: {
    label: 'Page Views',
  },
  desktop: {
    label: 'Desktop',
    color: 'var(--color-fuchsia-600)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--color-cyan-400)',
  },
} satisfies ChartConfig;

export type LineChartCardProps = {
  title: string | ReactElement;
  subtitle: string | ReactElement;
  switchButtons: ReactElement[];
  chart: ReactElement;
};

export function SwitchButton({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: string | ReactElement;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      data-active={active}
      onClick={onClick}
      className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="w-full text-lg font-bold leading-none sm:text-3xl">
        {value}
      </span>
    </button>
  );
}

export function LineChartCardTemplate({
  title,
  subtitle,
  switchButtons,
  chart,
}: LineChartCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
        <div className="flex min-w-[24rem]">{switchButtons}</div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <div className="aspect-auto h-[250px] w-full">{chart}</div>
      </CardContent>
    </Card>
  );
}
