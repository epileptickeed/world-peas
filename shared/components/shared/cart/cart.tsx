import React from 'react';
import { CartHeader } from './cart-header';
import { CartOverview } from './cart-overview';

interface Props {
  className?: string;
}

export const Cart: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CartHeader className="pt-6" />
      <hr className="my-3 py-3" />
      <CartOverview />
    </div>
  );
};
