enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

// console.log(Cores);
console.log(Cores.VERMELHO);

escolhaACor(201);
