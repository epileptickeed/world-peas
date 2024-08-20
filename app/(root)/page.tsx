import { BigTitleHeader, Container, Photos, WhatWeBelieve } from '@/shared/components/shared';

export default function Home() {
  return (
    <main className="h-[70vh]">
      <BigTitleHeader />

      <Photos />

      <Container>
        <WhatWeBelieve />
      </Container>
    </main>
  );
}
