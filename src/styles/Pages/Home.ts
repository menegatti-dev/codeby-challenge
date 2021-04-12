import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  padding: 86.4px 50px 65px;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-width: 600px;
  min-height: 500px;
  padding: 20px;
  background: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Separator = styled.div`
  background: #c9c9c9;
  height: 1px;
  width: 100%;
  margin: 30px 0;
`;
