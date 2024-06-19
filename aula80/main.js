const pessoas = [
    {id: 3, nome:'Kaike'},
    {id: 2, nome: 'Paulo'},
    {id: 1, nome: 'Victor'}
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id,{ ...pessoa });
}

console.log(novasPessoas);