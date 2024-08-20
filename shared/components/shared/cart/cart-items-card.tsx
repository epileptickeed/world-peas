import React from 'react';
import { cn } from '../../ui/utils';
import Image from 'next/image';
import { Title } from '../title';

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

export const CartItemsCard: React.FC<Props> = ({ className, imageUrl, price, quantity, name }) => {
  return (
    <div
      className={cn(
        'border rounded-xl overflow-hidden flex justify-between items-center bg-[#fafaf5]',
        className,
      )}>
      <div className="flex gap-4">
        <Image src={`${imageUrl}`} width={190} height={190} alt="tomato" />
        <div className="flex flex-col justify-between p-4">
          <Title text={name} size="md" className="font-bold" />
          <p className="text-green-clr font-bold">${price} / lb</p>
          <p className="font-bold">{quantity}lb</p>
        </div>
      </div>
      <p>{price}$</p>
    </div>
  );
};
