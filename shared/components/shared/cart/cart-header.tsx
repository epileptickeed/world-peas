import React from 'react';
import { Title } from '../title';
import { cn } from '../../ui/utils';

interface Props {
  className?: string;
}

export const CartHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-baseline gap-4', className)}>
      <Title text="Basket" size="xl" className="font-newsreader font-bold" />
      <p>3 items</p>
    </div>
  );
};
