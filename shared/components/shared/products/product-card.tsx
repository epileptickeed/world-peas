import React from 'react';
import { cn } from '../../ui/utils';
import { Title } from '../title';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
}

export const ProductCard: React.FC<Props> = ({ className, imageUrl, name, price, description }) => {
  return (
    <div className={cn('border w-[300px] overflow-hidden rounded-xl bg-[#fafaf5]', className)}>
      <img src={`${imageUrl}`} className="" alt={name} />
      <div className="flex flex-col gap-2 px-4 py-2">
        <div>
          <Title text={name} size="sm" className="font-bold" />
          <p className="text-green-clr font-bold">${price} / lb</p>
        </div>
        <p className="text-light-grey">{description}</p>
      </div>
    </div>
  );
};
