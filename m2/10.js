let mensagem = "Hello"

function exibirMensagem(){
    let x = "World"
    console.log(mensagem); // -> Hello
    console.log(x); // -> World
}
exibirMensagem();

console.log(mensagem); // -> Hello
console.log(x); // -> undefined; x está fora do escopo