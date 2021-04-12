import Link from 'next/link';
import React from 'react';
import Button from '../Button';

import { Container, Card, Title } from './styles';

interface IModalProps {
  show: boolean;
  title: string;
  buttonTitle: string;
}

const Modal: React.FC<IModalProps> = ({ show, title, buttonTitle }) => {
  return (
    <Container show={show}>
      <Card>
        <Title>{title}</Title>
        <Link href="/">
          <Button size="small" label={buttonTitle} />
        </Link>
      </Card>
    </Container>
  );
};

export default Modal;
