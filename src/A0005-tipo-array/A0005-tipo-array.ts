// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((letra) => letra.toLocaleUpperCase());
}

const result = multiplicaArgs(5, 8, 2);
const concatenacao = concatenaString('Wesley', 'Icaro', 'Lima');
const upper = toUpperCase('a', 'Bc', 'dEf');

console.log(upper);
