import { Button } from '@nx-next/shared-ui/components/button';
import { DownloadIcon } from 'lucide-react';

import { AsyncLineChartCard } from './AsyncLineChartCard';
import { Suspense } from 'react';
import { LineChartCardLoading } from './line-chart/line-chart-card-loading';

export default async function Home() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4 border border-border">
      <div className="flex w-full max-w-3xl justify-end">
        <Button variant={'default'}>
          Download data <DownloadIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="w-full max-w-3xl">
        <Suspense fallback={<LineChartCardLoading />}>
          <AsyncLineChartCard />
        </Suspense>
      </div>
      <div className="flex w-full max-w-3xl justify-end">
        (intentional hardcoded 2 seconds server response delay)
      </div>
    </div>
  );
}
