class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo',{
            value: cpf.replace(/\D+/g,''),
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }
    
    geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;
        for(let stringNumerica of cpfParcial){
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    validar(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCpf()
        console.log(this.novoCpf);
        return this.novoCpf === this.cpfLimpo;
    }
}

let cpf1 = new ValidaCPF('524.445.212-25');
console.log(cpf1.validar())