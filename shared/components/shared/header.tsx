import React from 'react';
import { Title } from './title';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Container } from './container';
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container className="flex items-center justify-between py-6">
        <Title text="World Peas" size="lg" className="font-bold text-green-clr" />
        <div className="flex items-center justify-between gap-4">
          <Link href={'/products'}>Shop</Link>
          <Link href={'/'}>Newstand</Link>
          <Link href={'/'}>Who are we</Link>
          <Link href={'/'}>My profile</Link>
          <Button className="bg-green-clr text-white">Basket (3)</Button>
        </div>
      </Container>
    </div>
  );
};
