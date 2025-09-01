//let e var: variável
//const: constante

//let e var se diferem em escopo e hoisting
//var se limitam apenas às funções em escopo e são legados
//let se limitam a qualquer bloco de código como escopo
const pi = 3.14

if(true){
    let x = pi + 2;
    var y = pi + 2;
    console.log(x);
    console.log(y);
}

console.log(x); // -> undefined porque x não está declarada no escopo
console.log(y);