let a = [3, 56, 'Palavra', 'Sintaxe'];
let result = 'Números dentro do array: ';

for(let values of a){
    if(typeof values == 'number'){result += `${values}, `};
}

console.log(result);
