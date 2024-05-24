// concatenando arrays
// usando concat();
const v1 = [1,2,3];
const v2 = [4,5,6];
const v3 = v1.concat(v2);
console.log(v3);

// usando ... spread

const vet1 = [1,2,3];
const vet2 = [4,5,6];
const vet3 = [...vet1, ...vet2];
console.log(vet3);