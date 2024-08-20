import React from 'react';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

interface Props {
  className?: string;
}

export const BigTitleHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center h-full  flex-col gap-12 justify-center', className)}>
      <h1 className="text-[48px] text-center">
        We’re <span className="font-newsreader">farmers, purveyors,</span> and{' '}
        <span className="font-newsreader"> eaters </span>
        <br />
        of organically grown food.
      </h1>
      <Button className="text-white bg-green-clr">Brows our shop</Button>
    </div>
  );
};
