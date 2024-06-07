/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Um protótipo é o termo usado para de referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Cada objeto em JavaScript possui uma propriedade integrada, que é chamada
de protótipo. O protótipo é em si um objeto, então o protótipo terá seu
próprio protótipo, formando o que chamamos de cadeia de protótipos. A 
cadeia termina quando chegamos a um protótipo que tem nullpor protótipo.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
/*
Existe um problema de performance quando um método como o nomeCompleto é
declarado assim, uma vez que se criarmos 1000 pessoas, as mil utilizarão
obrigatóriamente esse método. Agora imagine mais 20 métodos desses junto
a mil pessoas. Para solucionar esta problemática, o javascript utiliza de
prototypes, como no exemplo abaixo:
*/

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// Pessoa.prototype === pessoa1.__proto__

const p1 = new Pessoa('Kaike','Carvalho');
const data = new Date();

console.dir(p1);
console.dir(data);