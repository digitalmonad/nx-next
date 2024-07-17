import { Button } from '@nx-next/shared-ui/components/button';
import { ArrowRight } from 'lucide-react';

export default async function Home() {
  let user;

  try {
    user = await (await fetch('/api/user')).json();
  } catch (error) {
    console.log('SSR FETCH ERROR IGNORED ;)');
  }

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4 border border-red-500">
      <h1 className="text-3xl">Welcome</h1>
      <div className="flex gap-x-2">
        {user?.firstName} {user?.lastName}
      </div>
      <div className="flex gap-x-2">
        <Button variant={'default'}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
