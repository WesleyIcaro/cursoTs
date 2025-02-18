let x = 10;
x = 0b1010;
const y = 10;

// eslint-disable-next-line prefer-const
let a = 100 as const;

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

function escolhaACor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaACor('Vermelho'));

pessoa.nome = 'João'; // Erro porque o nome é constante

pessoa.sobrenome = 'Carvalho'; // Sem erro porque o sobrenome não é constante
