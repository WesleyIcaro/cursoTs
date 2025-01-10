// Tuple
const dadosCliente1: readonly [number, string] = [7, 'Wesley'];
const dadosCliente2: [number, string, string] = [7, 'Wesley', 'Lima'];
const dadosCliente3: [number, string, string?] = [7, 'Wesley'];
const dadosCliente4: [number, string, ...string[]] = [
  7,
  'Wesley',
  'Icaro',
  'Lima',
  'Dos',
  'Santos',
];

// dadosCliente1[0] = 12;
// dadosCliente1[1] = 'Icaro';
// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Wesley', 'Icaro', 'Lima'];
const array2: ReadonlyArray<string> = ['Wesley', 'Icaro', 'Lima'];

console.log(array1);
console.log(array2);
