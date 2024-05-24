// Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos.
// Retorne os números maiores que 10
const nums = [5, 50, 80, 8, 10, 7, 11, 15, 2, 1, 27];
const v1 = nums.filter( num => num > 10);
// console.log(v1);

const pessoas = [
    {nome: 'Kaika', idade: 19},
    {nome: 'Eduardo', idade: 25},
    {nome: 'Pedro', idade: 14},
    {nome: 'Felipe', idade: 54},
];

const pessoasComNomeGrande = pessoas.filter(nome => nome.nome.length > 6);
const pessoasComMaisDe50 = pessoas.filter(nome => nome.idade > 50);
const pessoasComNomeA = pessoas.filter(nome => nome.nome.endsWith('a'));
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50);
console.log(pessoasComNomeA);
