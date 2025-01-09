function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Wesley',
  sobrenome: 'Icaro',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Wesley', 'Icaro');
pessoa.exibirNome();

export { pessoa };
