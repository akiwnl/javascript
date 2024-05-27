// Revisando objetos

const pessoa = {
    nome: "Catharina",
    sobrenome: "Sene"
};

// duas formas de acessar
console.log(pessoa['nome']);
console.log(pessoa.sobrenome); // mais intuitiva

// usando construtor

const pessoa1 = new Object();
pessoa1.nome = "Kaike";
pessoa1.sobrenome = "Carvalho";
pessoa1.idade = 19;
pessoa1.falarOi = function() {
    return (`${this.nome} falou oi`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// delete pessoa1.sobrenome;

console.log(pessoa1['nome']);
console.log(pessoa1.sobrenome); // mais intuitiva
console.log(pessoa1.getDataNascimento());
pessoa1.falarOi();

// para ver os atributos e metodos:
// for (let chave in pessoa1) {
//     console.log(chave);
// }


