// Metodos uteis
/*
Object.values
Object.entries
Object.assign
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/

// Ambos apontam para o mesmo endereço de memoria, portanto ao alterar um objeto, é alterado o outro. 
const produto = {nome: "Caneca", preco: 1.80};
const outraCoisa = produto;

produto.nome = "Camiseta";
console.log(outraCoisa);