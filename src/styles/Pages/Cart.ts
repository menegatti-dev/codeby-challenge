import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100%;
  padding: 86.4px 50px 65px;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  border-radius: 10px;
  min-width: 600px;

  background: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 26px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 2.6rem;
  font-weight: bold;
`;
export const Separator = styled.div`
  background: #c9c9c9;
  height: 1px;
  width: 100%;
`;
export const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 26px;
`;

export const WrapperTotal = styled.section`
  padding: 10px 26px;
`;

export const WrapperTotalValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0px;
`;

export const TotalTitle = styled.p`
  font-size: 26px;
  font-weight: bold;

  color: #000;
`;

export const TotalValue = styled(TotalTitle)``;

export const FreeShipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c7ffa6;

  height: 54px;
  border-radius: 27px;
  margin: 20px 30px;

  span {
    font-size: 2.2rem;
    color: #217a00;
  }
`;
export const WrapperButton = styled.div`
  padding: 26px;
  display: flex;
`;
