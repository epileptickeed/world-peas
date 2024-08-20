import React from 'react';
import { cn } from '../ui/utils';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('max-w-[1280px] mx-auto', className)}>{children}</div>;
};
