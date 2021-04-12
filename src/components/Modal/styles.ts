import styled, { keyframes } from 'styled-components';

interface IContainerProps {
  show: boolean;
}

const fadeIn = keyframes`
  from { opacity: 0; }
    to { opacity: 1; }
`;

export const Container = styled.div<IContainerProps>`
  z-index: 10;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  animation: ${fadeIn} 0.6s;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 40vh;
  width: 40vw;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
`;

export const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
`;
