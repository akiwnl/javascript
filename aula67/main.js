// Reduce

const nums = [5, 50, 80, 8, 10, 7, 11, 15, 2, 1, 27];

const sumArr = nums.reduce((acumulador, valor,indice, array)=> {
    acumulador += valor;
    return acumulador;
},0);

console.log(sumArr)

const pessoas = [
    {nome: 'Kaike', idade: 19},
    {nome: 'Eduardo', idade: 25},
    {nome: 'Pedro', idade: 14},
    {nome: 'Carla', idade: 54},
];

const maisVelho = pessoas.reduce((acc, value) => {
    if(acc.idade > value.idade) return acc;
    return value;
})

console.log(maisVelho);