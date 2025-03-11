export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; // Chamndo o setter dentro do construtor
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Wesley', 'Icaro', 26, '123.456.789-00');
pessoa.cpf = '123.456.789-99'; // Ao utilizar o = estamos chamando o set
console.log(pessoa.cpf); // Ao utilizar o get não é necessário o uso de ()
