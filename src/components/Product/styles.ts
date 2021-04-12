import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: contain;

  border: 1px solid #c4c4c4;
`;

export const WrapperInfo = styled.div`
  flex: 1;
  flex-direction: column;

  padding: 18px 26.5px 0;
`;

export const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
`;

export const ListPrice = styled.p`
  margin-top: 5px;
  font-size: 1.4rem;

  color: #a5a5a5;
`;

export const SellingPrice = styled(Name)``;
