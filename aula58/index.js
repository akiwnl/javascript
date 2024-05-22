// Constructor functions retorna objetos
// Factory functions retorna objetos
// Constructor -> Pessoa (new)

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

const p1 = new Person('Kaike', 'Carvalho');

console.log(p1.name)