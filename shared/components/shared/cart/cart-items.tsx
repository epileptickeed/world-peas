import React from 'react';
import { Title } from '../title';
import { CartItemsCard } from './cart-items-card';
import { cn } from '../../ui/utils';

interface Props {
  className?: string;
}

export const CartItems: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-4 w-[70%]', className)}>
      <CartItemsCard
        imageUrl="/assets/images/tomato.png"
        price={5.99}
        quantity={1}
        name="Heirloom tomato"
      />
      <CartItemsCard
        imageUrl="/assets/images/ginger.png"
        price={12.99}
        quantity={1}
        name="Ginger"
      />
      <CartItemsCard imageUrl="/assets/images/garlic.png" price={7.99} quantity={1} name="Garlic" />
    </div>
  );
};
