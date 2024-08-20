import Image from 'next/image';
import React from 'react';
import Image1 from '../../../public/assets/images/1.png';
import Image2 from '../../../public/assets/images/2.png';
import { cn } from '../ui/utils';

interface Props {
  className?: string;
}

export const Photos: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between gap-4 ml-[9%]', className)}>
      <Image width={504} height={693} alt="image1" src={Image1} />
      <div>
        <Image width={780} height={480} alt="image1" src={Image2} />
        <p className="text-[14px]">
          <span className="font-bold">Central California</span> — The person who grew these was
          located in Central California and, er, hopefully very well-compensated.
        </p>
      </div>
    </div>
  );
};
