class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} ja esta ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} ja esta desligado`);
            return;
        }
        this.ligado = false;
    }
}
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Iphone','Preto','15');
console.log(s1)