import styled, { css } from 'styled-components';

interface IContainerProps {
  size: 'small' | 'medium';
}

const sizeValues = {
  small: css`
    height: 55px;
    max-width: 100%;
  `,
  medium: css`
    height: 78px;
    width: 100%;
  `,
};

export const Container = styled.button<IContainerProps>`
  ${({ size }) => sizeValues[size]}
  max-width: 100%;
  border: none;
  border-radius: 8px;
  padding: 0 20px;
  background: #3b74f2;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 4px #999;
  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #1b54d2 radial-gradient(circle, transparent 1%, #1b54d2 1%) center/15000%;
  }

  &:active {
    background-color: #5b94f2;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const Label = styled.span<IContainerProps>`
  color: #fff;
  font-size: ${({ size }) => (size === 'medium' ? '2.6rem' : '1.8rem')};
  font-weight: bold;
`;
