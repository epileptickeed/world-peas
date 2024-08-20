import React from 'react';
import { cn } from '../../ui/utils';

interface Props {
  className?: string;
}

export const OrderSummary: React.FC<Props> = ({ className }) => {
  return <div className={cn('w-[30%] h-[450px] rounded-xl border', className)}></div>;
};
