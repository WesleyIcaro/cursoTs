type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemIdade & TemSobrenome; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

type BusinessPartner = {
  name: string;
  credit: number;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact & BusinessPartner;

const teste: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 49512900,
};

console.log(teste);

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Otávio',
};

console.log(pessoa);

// Module mode
export { pessoa };
