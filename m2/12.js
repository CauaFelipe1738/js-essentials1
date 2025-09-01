let idade = 25;

if (true) {
    let idade = 30;
    console.log("Dentro do bloco:", idade); // 30
}

console.log("Fora do bloco:", idade); // 25

var idade2 = 25;

if (true) {
    var idade2 = 30;
    console.log("Dentro do bloco:", idade); // 30
}

console.log("Fora do bloco:", idade); // 30

//let é delimitada por qualquer bloco
//enquanto var é delimitada apenas por função