import { Button } from '@nx-next/shared-ui/components/button';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="h-screen flex flex-col border justify-center items-center gap-y-4  border-red-500">
      <h1>Welcome</h1>
      <div className="flex gap-x-2">
        <Button variant={'secondary'}>Button</Button>
        <Button variant={'default'}>Button</Button>
      </div>
    </div>
  );
}
