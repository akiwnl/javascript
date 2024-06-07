// Metodos uteis
/*
Object.values
Object.entries
Object.assign
Object.getOwnPropertyDescriptor(objeto, 'propriedade')
... (spread)

console.log(Object.keys(produto)); // ['nome', 'preco']
Object.freeze(produto) // congela o objeto, nao podendo alterar mais.
*/

// Ambos apontam para o mesmo endereço de memoria, portanto ao alterar um objeto, é alterado o outro. 
const produto = {nome: "Caneca", preco: 1.80};

// const outraCoisa = produto;
// outraCoisa.nome = "Camiseta";
// console.log(produto); // { nome: 'Camiseta', preco: 1.8 }
// console.log(outraCoisa); // { nome: 'Camiseta', preco: 1.8 }

// Usando spread operator ...
// const outraCoisa = { ...produto };
// outraCoisa.nome = "Camiseta";
// console.log(produto); // { nome: 'Caneca', preco: 1.8 }
// console.log(outraCoisa); // { nome: 'Camiseta', preco: 1.8 }

// Usando Object.assign() 
const outraCoisa = Object.assign({},produto);
outraCoisa.nome = "Camiseta";
console.log(produto); // { nome: 'Caneca', preco: 1.8 }
console.log(outraCoisa); // { nome: 'Camiseta', preco: 1.8 }

// Se precisar pegar uma ou mais propriedades utilizamos assim
const umaPropriedade = { preco: produto.preco };
console.log(umaPropriedade);


console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values(produto))
console.log(Object.entries(produto))