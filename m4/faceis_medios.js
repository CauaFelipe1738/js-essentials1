//1. Listar nomes com for... of
console.log('\nNomes do array:');
let nomes = ['Vinicius', 'Mário', 'Paulo', 'Benson', 'Caique'];

for(let nome of nomes){
    console.log(nome);
}

//2. Somar valores com for... of
console.log('\nSoma dos números 1, 2, 3, 4, 5');
let numeros = [1, 2, 3, 4, 5];
let res = 0;

for(let numero of numeros){
    res = res + numero;
}

console.log(res);

//3. Exibir propriedades com for... in
console.log('\nPropriedades de Joãozinho');
let pessoa = {
    nome: 'Joãozinho',
    idade: 15,
    cidade: 'Mostardas - RS'
}

for(let values in pessoa){
    console.log(`${values}: ${pessoa[values]}`);
}

//4. Conta quantas propriedades tem um objeto com for... in
console.log(`\nNúmero de atributos de Joãozinho:`);
res = 0;

for(let values in pessoa){
    res++
}

console.log(res);

//5. Concatenar nomes em string
console.log('\nNomes do array')
let nome_conc = '';

for(let nome of nomes){
    nome_conc += `${nome}, `;
}

console.log(nome_conc);

//6. Imprime tipos de dados do array
console.log('\nTipos de dado do array:');
let coisas = [2, 'Vizinho', 3n];

for(let coisa of coisas){
    console.log(typeof coisa);
}

//7. Transforma valores de objeto
console.log("\nAdiciona 1 às idades")
let pessoinhas = {
    nome1: 'Alberto',
    idade1: 3,
    nome2: 'João',
    idade2: 15,
    nome3: 'Camille',
    idade3: 23,
}

for(let pessoinha in pessoinhas){
    if(typeof pessoinhas[pessoinha] == "number"){
        pessoinhas[pessoinha] += 1;
    }
}

console.log(pessoinhas);

//8. Converter objeto em array string
console.log("\nTransforma objeto em array de strings")

let txt = '';
let txt_array = [];

for(let pessoinha in pessoinhas){
    txt = `${pessoinha}: ${pessoinhas[pessoinha]}`;
    txt_array.push(txt);
}

console.log(txt_array);

//9. Contar quantos valores únicos no array
console.log('\nContar quantos valores únicos no array');

let variaveis = [1, 3, 17, 2, 3];
let unico = new Set();

for(let variavel of variaveis){
    if(unico.has(variavel)){
        unico.delete(variavel)
    }else{
        unico.add(variavel);
    }
}

console.log(unico);