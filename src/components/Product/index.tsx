import formatBRL from '@/helpers/formatBRL';

import { Container, Image, WrapperInfo, Name, SellingPrice, ListPrice } from './styles';

interface IProductProps {
  imageUrl: string;
  name: string;
  listPrice: number;
  sellingPrice: number;
}

const Product: React.FC<IProductProps> = ({ imageUrl, name, listPrice, sellingPrice }) => {
  return (
    <Container>
      <Image src={imageUrl} />
      <WrapperInfo>
        <Name>{name}</Name>
        <ListPrice>{formatBRL(listPrice)}</ListPrice>
        <SellingPrice>{formatBRL(sellingPrice)}</SellingPrice>
      </WrapperInfo>
    </Container>
  );
};

export default Product;
