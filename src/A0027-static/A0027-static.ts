export class Pessoa {
  static idadePadrao = 0; // Propriedade estática
  static cpfPadrao = '000.000.000-00'; // Propriedade estática

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static falaOi(): void {
    console.log('Oi');
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Wesley', 'Icaro', 26, '123.456.789-00'); // Os metodos estáticos não são acessiveis pela instância
const pessoa2 = Pessoa.criaPessoa('Wesley', 'Icaro');
pessoa1.cpf = '123.456.789-99'; // Ao utilizar o = estamos chamando o set
console.log(pessoa1); // Ao utilizar o get não é necessário o uso de ()
console.log(pessoa2);
// Pessoa.falaOi(); // O metodo falaOi é acessível pela classe

pessoa1.metodoNormal(); // Acessando um método normal

console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // Acessando uma propriedade estática
