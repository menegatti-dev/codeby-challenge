import Head from 'next/head';

import Link from 'next/link';

import { Container, Card, Separator } from '@/styles/Pages/Home';
import Button from '@/components/Button';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Codeby</title>
      </Head>
      <Container>
        <Card>
          <Link href={{ pathname: '/cart/[type]', query: { type: 'acima-10-reais' } }}>
            <Button label="Carrinho acima de 10 reais" />
          </Link>
          <Separator />
          <Link href={{ pathname: '/cart/[type]', query: { type: 'abaixo-10-reais' } }}>
            <Button label="Carrinho abaixo de 10 reais" />
          </Link>
        </Card>
      </Container>
    </>
  );
};

export default Home;
