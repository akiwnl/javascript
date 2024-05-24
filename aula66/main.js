// Map

// Dobre os numeros
const nums = [5, 50, 80, 8, 10, 7, 11, 15, 2, 1, 27];

const v1 = nums.map(num => num*2);
console.log(v1);

const pessoas = [
    {nome: 'Kaike', idade: 19},
    {nome: 'Eduardo', idade: 25},
    {nome: 'Pedro', idade: 14},
    {nome: 'Carla', idade: 54},
];

// retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
// Remova apenas a chave nome do objeto
const idades = pessoas.map(obj => obj.idade);
console.log(idades);
// Adicione uma chave id em cada objeto
const newArr = pessoas.map((obj,idx) => {
    const newObj = {...obj};
    newObj.id = idx;
    return newObj;
})
console.log(newArr.length);