import { ButtonHTMLAttributes } from 'react';
import { Container, Label } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<IButtonProps> = ({ label, ...rest }) => {
  return (
    <Container {...rest} type="button">
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
