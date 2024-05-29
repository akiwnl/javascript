// Metodos uteis
/*
Object.values
Object.entries
Object.assign
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/

const produto = {nome: "Caneca", preco: 1.80};
const outraCoisa = produto;

produto.nome = "Camiseta";
console.log(outraCoisa);