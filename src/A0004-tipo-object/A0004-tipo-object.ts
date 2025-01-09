// const objetoA: {
//   chaveA: 'Valor A';
//   chaveB: 'Valor B';
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

// const objetoA: {
//   chaveA: string;
//   chaveB: string;
//   chaveC?: string;
//   [key: string]: unknown;
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor';
// objetoA.chaveD = 'Nova chave';

console.log(objetoA);
