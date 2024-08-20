import React from 'react';
import { cn } from '../../ui/utils';
import { CartItems } from './cart-items';
import { OrderSummary } from './order-summary';

interface Props {
  className?: string;
}

export const CartOverview: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between gap-6', className)}>
      <CartItems />
      <OrderSummary />
    </div>
  );
};
