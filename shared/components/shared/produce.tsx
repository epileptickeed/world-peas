'use client';

import React from 'react';
import { Title } from './title';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

interface Props {
  className?: string;
}

export const Produce: React.FC<Props> = ({ className }) => {
  const [active, setActive] = React.useState(false);

  return (
    <div className={cn('flex justify-between pt-8', className)}>
      {/* left side */}
      <div className="flex items-baseline gap-2">
        <Title text="Produce" className="font-bold font-newsreader" size="2xl" />
        <Title text="Fresh" className="font-bold " size="xs" />
        <Title text="— August 21, 2023" size="xs" />
      </div>

      {/* right side */}
      <div className="flex gap-2">
        <Button variant={'default'} className="rounded-3xl font-bold">
          Default
        </Button>
        <Button variant={'secondary'} className="rounded-3xl font-bold">
          A-Z
        </Button>
        <Button variant={'secondary'} className="rounded-3xl font-bold">
          List view
        </Button>
      </div>
    </div>
  );
};
