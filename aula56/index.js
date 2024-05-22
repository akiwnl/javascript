// Factory Function
function createPerson(name, lastName, height, weight) {
    return {
        name,
        lastName,
        // Getter
        get fullName(){
            return `${this.name} ${this.lastName}`;
        },
        // Setter
        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.name = value.join(' ');
        },
        speak(something = 'Hi!') {
            return `${this.name} spoke ${something}.`;
        },
        height,
        weight,
        // Getter
        get imc(){
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    };
}

const p1 = createPerson('Kaike','Carvalho', 1.92, 94);

console.log(p1.name);
console.log(p1.lastName);
console.log(p1.speak());
console.log(p1.fullName);