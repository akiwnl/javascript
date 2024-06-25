class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // metodos de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodo estatico
    static trocarPilha() {
        console.log('trocando pilha');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
// controle1.trocarPilha(); // vai dar erro
ControleRemoto.trocarPilha();
console.log(controle1);