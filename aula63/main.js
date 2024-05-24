//               0  1  2  3  4   
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// const removidos = numbers.splice(1, 3, 10);
// O método splice é usado para alterar o conteúdo de uma array, removendo ou substituindo elementos existentes e/ou adicionando novos elementos.
// O método splice é chamado com três argumentos:

// index (1): A posição inicial na array a partir da qual começar a alterar. No caso, o índice 1.
// elementosRemovido (3): O número de elementos a serem removidos a partir do índice 1.
// novoElemento (10): O elemento que será adicionado na posição indicada pelo índice 1.

// pop
const arr_pop = numbers.splice(- 1, 1);
console.log(numbers);

// shift
const arr_shift = numbers.splice(0, 1);
console.log(numbers);

// push
const arr_push = numbers.splice(numbers.length, 0, 8);
console.log(numbers);

// unshift
const arr_unshift = numbers.splice(0,0,10);
console.log(numbers);