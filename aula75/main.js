// Manipulando prototypes

// new Object -> Object.prototype
// const objetoA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// };
// const objetoB = {
//     chaveB: 'B'
//     // __proto__: objetoA
// };
// const objetoC = new Object();
// objetoC.chaveC = 'C';
// Object.setPrototypeOf(objetoB,objetoA);
// Object.setPrototypeOf(objetoC,objetoB);
// console.log(objetoC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50); // esse ja vai direto.
const p2 = { // o literal não funciona direto pois ele nao herda Produto.
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2,Produto.prototype);
p1.aumento(10);
p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Grande'   
    }
});
p3.aumento(10);
console.log(p3);

console.log(p1);
console.log(p2);
