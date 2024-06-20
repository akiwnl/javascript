// Constructor functions retorna objetos
// Factory functions retorna objetos
// Constructor -> Pessoa (new)

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

const p1 = new Person('Kaike', 'Carvalho');

console.log(p1.name)

/*
Há também diferenças na herança e prototipagem. Enquanto a Constructor Function utiliza a cadeia de prototipos
que permite a definição de métodos no protótipo do construtor, a Factory Function não utiliza desse meio e isso
pode trazer alguns problemas como a duplicação de métodos e maior consumo de memória.

O uso do `this` na Factory Function depende do contexto em que a função é chamada, enquanto na Constructor Function,
o `this` é o novo objeto criado pelo `new`.

Para encerrar, ambos os padroes tem suas vantagens e desvantagens. As Factory Functions são mais simples e seguras 
em muitos casos, enquanto as Constructor Functions oferecem suporte nativo à herança baseada em protótipos do JavaScript.
A escolha entre um e outro depende do contexto e das necessidades específicas da aplicação.
*/