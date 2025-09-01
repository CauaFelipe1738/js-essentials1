function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // 10
        console.log(b); // 20
    }
    console.log(a); // 10
    console.log(b); // undefined
}
testeEscopo();