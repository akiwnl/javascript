// defineProperty && defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this,'estoque', {
        enumerable: true, // Pode mostrar a chave?
        value: estoque, // atribui o valor
        writable: false, // pode alterar o valor?
        configurable: false // pode reconfigurar a chave?
    }); 
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Pode mostrar a chave?
            value: estoque, // atribui o valor
            writable: false, // pode alterar o valor?
            configurable: false // pode reconfigurar a chave?
        },
        preco: {
            enumerable: true, // Pode mostrar a chave?
            value: estoque, // atribui o valor
            writable: false, // pode alterar o valor?
            configurable: false // pode reconfigurar a chave?
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 10;
console.log(Object.keys(p1));