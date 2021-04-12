import { ButtonHTMLAttributes } from 'react';
import { Container, Label } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: 'small' | 'medium';
}

const Button: React.FC<IButtonProps> = ({ label, size = 'medium', ...rest }) => {
  return (
    <Container {...rest} type="button" size={size}>
      <Label size={size}>{label}</Label>
    </Container>
  );
};

export default Button;
