export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  // sala: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    // this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEYYYY';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Wesley', 'Icaro', 26, '111.111.111-11');

const aluno = new Aluno('Wesley', 'Icaro', 26, '111.111.111-11', '001');

const cliente = new Cliente('Wesley', 'Icaro', 26, '111.111.111-11');

console.log(pessoa.getNomeCompleto());

console.log(aluno.getNomeCompleto());

console.log(cliente.getNomeCompleto());

console.log(aluno);
