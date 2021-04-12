interface IFormatBRL {
  (param: number): string;
}
const formatBRL: IFormatBRL = value => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);
};

export default formatBRL;
