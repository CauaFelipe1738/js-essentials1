var nome = "Ana";

function mostrarNome() {
    var nome = "Carlos";
    console.log(nome); // Carlos
}

mostrarNome();
console.log(nome); // Ana

//var quando dentro de uma função é delimitada
//logo nome é Carlos apenas dentro da função
//senão ele toma o valor global Ana