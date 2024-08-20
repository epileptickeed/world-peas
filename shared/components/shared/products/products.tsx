import React from 'react';
import { ProductCard } from './product-card';
import { cn } from '../../ui/utils';

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('p-6 grid grid-cols-3 place-items-center', className)}>
      {/* <img src={'/assets/images/garlic.png'} alt="руддщ" /> */}
      <ProductCard
        imageUrl={`/assets/images/tomato.png`}
        name={'Heirloom tomato'}
        price={5.99}
        description={'Grown in San Juan Capistrano, CA'}
      />
      <ProductCard
        imageUrl={`/assets/images/ginger.png`}
        name={'Heirloom tomato'}
        price={5.99}
        description={'Grown in San Juan Capistrano, CA'}
      />
      <ProductCard
        imageUrl={`/assets/images/garlic.png`}
        name={'Heirloom tomato'}
        price={5.99}
        description={'Grown in San Juan Capistrano, CA'}
      />
    </div>
  );
};
