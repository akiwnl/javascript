// Constructor Function | getter & setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this,'estoque', {
        enumerable: true, // Pode mostrar a chave?
        configurable: true, // pode reconfigurar a chave?
        get: function(){
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError("Not a Number");
            }
            estoquePrivado = valor;
        }
    }); 
}
const p1 = new Produto('Camiseta',20,3);
p1.estoque = 10;
// console.log(p1.estoque);

// Factory Function | getter & setter
function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Camiseta Azul';
console.log(p2.nome);
