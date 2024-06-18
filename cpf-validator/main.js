function cpfValidator(cpf) {
    Object.defineProperty(this,'cleanCpf', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g,'');
        }
    })
}
cpfValidator.prototype.valid = function() {
    if(typeof this.cleanCpf === 'undefined') return false;
    if(this.cleanCpf.length !== 11) return false;
    if(this.isSequence()) return false;

    const partialCpf = this.cleanCpf.slice(0, -2)
    const digit1 = this.createDigit(partialCpf);
    const digit2 = this.createDigit(partialCpf + digit1);

    const newCpf = partialCpf + digit1 + digit2;
    return newCpf === this.cleanCpf;
}

cpfValidator.prototype.createDigit = function(partialCpf) {
    const cpfArr = Array.from(partialCpf);
    let regressive = cpfArr.length + 1;
    const total = cpfArr.reduce((ac,val) => {
        ac += (regressive * Number(val))
        regressive--;
        return ac;
    },0);

    const digit = 11 - (total % 11);
    return digit  > 9 ? '0' : String(digit);
};

cpfValidator.prototype.isSequence = function() {
    const sequence =  this.cleanCpf[0].repeat(this.cleanCpf.length);
    return sequence === this.cleanCpf;
}
const cpf = new cpfValidator("123.846.870-50");
console.log(cpf.valid());