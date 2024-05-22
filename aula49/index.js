 // Function hoisting
 // Pode ser chamada tanto encima do codigo da funcao e tanto embaixo. 
 Hello();
function Hello() {
   console.log("Hello!");
}

 // First-class objects
 // Function expression
const Bye = function () {
   console.log("Bye!");
};
Bye();
// function executeFunction(functionExample) {
//    console.log("I'll execute your function below:");
//    functionExample();
// }
// executeFunction(Bye);

// Arrow function
const arrowFunction = () => {
   console.log("I`m a arrow function!");
}
arrowFunction();

// Inside objects
const Person = {
   speak() {
      console.log("Speaking...");
   }
};
Person.speak();
