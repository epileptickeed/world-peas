import { Container, Produce, Products } from '@/shared/components/shared';

export default function Page() {
  return (
    <main className="">
      <Container>
        <Produce />
        <hr />
        <Products />
      </Container>
    </main>
  );
}
