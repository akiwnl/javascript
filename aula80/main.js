class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} esta falando...`);
    }
    comer() {
        console.log('comendo...');
    }
    beber(){
        console.log('bebendo...');
    }
}

const pessoa1 = new Pessoa('Kaike', 'Carvalho');
pessoa1.falar();