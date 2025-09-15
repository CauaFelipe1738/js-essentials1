//verifica o tipo de null e indefinido
let n = null;
let u = undefined;
console.log(typeof n);
console.log(typeof u);

//verifica o tipo de dado de array e objeto
let a = [2, 3, 5, 7];
let o = {
    "1": 1,
    "2": 2,
    "3": 3
}

console.log(typeof a);
console.log(typeof o);

//Verifica o BigInt
let bi = 10n;
console.log(typeof bi)