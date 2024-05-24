// Arrays []

// const nomes = new Array('Eduardo', 'Kaike', 'Kenzo'); // usando construtor.
const nomes = [1,2,3,4,5];
// delete nomes[2]; // deixa no array na posicao determinada um vazio.

// Valor por referencia. Tudo que for modificado no newArr vai
// ser modificado no array original pois ambos apontam pro mesmo 
// endereco na memoria.
// const newArr = nomes;
// newArr.pop(); // remove o ultimo elemento do array e retorna esse mesmo elemento.
// console.log(newArr);
// console.log(nomes);

// Para corrigir isso, é necessario utilizar um operador, spread.

const newArr = [...nomes];
newArr.pop();
console.log(nomes);
console.log(newArr);
newArr.shift(); // remove o primeiro elemento e desloca todos os restantes para 1 casa a esquerda.
newArr.push(17); // add um elemento ao final do array
newArr.unshift(22); // add um elemento no inicio do array e desloca todos os restantes uma casa para a direita.
console.log(newArr);
const novo = newArr.slice(1,4); // retorna o array da posicao x ate a posicao y-1;
console.log(novo);
