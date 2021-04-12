import { GetServerSideProps } from 'next';
import Head from 'next/head';

import abaixo10Reais from '@/data/abaixo-10-reais.json';
import acima10Reais from '@/data/acima-10-reais.json';

import {
  Container,
  Card,
  Separator,
  Header,
  Title,
  Content,
  WrapperTotal,
  WrapperTotalValue,
  TotalTitle,
  TotalValue,
  FreeShipping,
  WrapperButton,
} from '@/styles/Pages/Cart';
import Button from '@/components/Button';
import formatBRL from '@/utils/formatBRL';
import Product from '@/components/Product';
import Modal from '@/components/Modal';
import { useState } from 'react';

interface ICartProps {
  data: typeof acima10Reais;
}

type CartType = 'acima-10-reais' | 'abaixo-10-reais';

export const getServerSideProps: GetServerSideProps<ICartProps> = async ({ params }) => {
  const cartType = (params?.type || '') as CartType;
  switch (cartType) {
    case 'acima-10-reais':
      return { props: { data: { ...acima10Reais } } };

    case 'abaixo-10-reais':
      return { props: { data: { ...abaixo10Reais } } };

    default:
      return { notFound: true };
  }
};

const Cart: React.FC<ICartProps> = ({ data }) => {
  const [isModalShow, setIsModalShow] = useState(false);

  const handleSubmit = (): void => {
    setIsModalShow(true);
  };
  return (
    <>
      <Head>
        <title>Codeby</title>
      </Head>
      <Container>
        <Card>
          <Header>
            <Title>Meu Carrinho</Title>
          </Header>
          <Separator />
          <Content>
            {data.items.map(product => (
              <Product
                key={product.uniqueId}
                imageUrl={product.imageUrl}
                name={product.name}
                listPrice={product.listPrice}
                sellingPrice={product.sellingPrice}
              />
            ))}
          </Content>
          <Separator />
          <WrapperTotal>
            <WrapperTotalValue>
              <TotalTitle>Total</TotalTitle>
              <TotalValue>{formatBRL(data.totalizers[0].value)}</TotalValue>
            </WrapperTotalValue>
            {data.totalizers[0].value > 1000 && (
              <FreeShipping>
                <span>Parabéns, sua compra tem frete grátis !</span>
              </FreeShipping>
            )}
          </WrapperTotal>
          <Separator />
          <WrapperButton>
            <Button onClick={handleSubmit} label="Finalizar compra" />
          </WrapperButton>
        </Card>
      </Container>
      <Modal
        show={isModalShow}
        title="Compra realizada com Sucesso!"
        buttonTitle="Realizar nova compra"
      />
    </>
  );
};

export default Cart;
