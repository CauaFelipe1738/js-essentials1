//VERIFICADOR DE SINAL 
//ATIVIDADE 1
let a = 20;
console.log(`Número: ${a}`);
if(a > 0){console.log('Número positivo');}
else if(a < 0){console.log('Número negativo');}
else{console.log('Número é zero');}

//NÚMERO PAR OU ÍMPAR
//ATIVIDADE 2
if(a%2 == 0){console.log('O número é par');}
else{console.log('O número é ímpar');}

//ATIVIDADE 5
//OPERADOR TERNÁRIO
let evenodd = a%2 > 0 ? "impar" : "par"  

//BOAS VINDAS POR TURNO
//ATIVIDADE 3
let trn = 'M';
console.log(`Turno: ${trn}`);

if(trn == ('m' || 'M')){
    console.log('Bom dia');
}else if(trn == ('T' || 't')){
    console.log('Boa tarde');
}else if(trn == ('N' || 'n')){
    console.log('Boa noite');
}else{console.log('Turno inválido')}

//MAIOR DE DOIS NÚMEROS
//ATIVIDADE 4
let x = 24;
let y = 1;
console.log(`Números: ${x} e ${y}`);

let m = Math.max(x, y);
console.log(`Maior: ${m}`);

//ATIVIDADE 6
//MENU SIMPLES COM SWITCH
let opcoes = ['Início', 'Sobre', 'Sair'];
let index = 0;

for(i = 0; i < opcoes.length; i++){
    console.log(opcoes[i]);
}

console.log(`\nOPÇÃO ESCOLHIDA: ${opcoes[opcoes.indexOf(index)]}`);
switch(opcoes){
    case 0:
        console.log('Bem-vindo ao site');
        break;
    case 1:
        console.log('Site com switch');
        break;
    case 2:
        console.log('Volte mais tarde');
        break;
}

//ATIVIDADE 7
//CONTADOR DE 1 A 5
let i = 0;

console.log('Numeros de 1 a 5');
while(i <= 5){
    console.log(i);
}

//ATIVIDADE 8
//CONTAGEM REGRESSIVA
i = 5;

do{
    console.log(i)
    i++;
}while(i > 0)

//ATIVIDADE 9
//CONTAR ATÉ DEZ
i = 1

for(i; i <= 10; i++){
    console.log(i);
}

//ATIVIDADE 10
//SOMA DOS NÚMEROS DE 0 A 10
let result = 0;
for(i = 0; i <= 10; i++){
    result += i;
}
console.log(result);

//ATIVIDADE 11
//EXIBIR TODOS OS ELEMENTOS DO ARRAY
let ar = ['Frase', 'composta', 'de', 'vários', 'elementos']

for(i = 0; i < ar.length; i++){
    console.log(ar[i]);
}

//ATIVIDADE 12
//FOR... OF DE ARRAY
let nomes = ['André', 'Bernardo', 'Caetano'];

for(let value of nomes){
    console.log(value);
}

//ATIVIDADE 13
//FOR... IN DE OBJETOS
let coisa = {
    massa: 23,
    volume: 5,
    temperatura: 24
}

for(let prop in coisa){
    console.log(`${prop} = ${obj[prop]}`)
}

//ATIVIDADE 14
//CONTAR ATÉ DEZ MAS PARAR NO CINCO
i = 0;

console.log('Número de um a cinco');

while(i < 10){
    if(i == 5) break;
    console.log(i);
}

//ATIVIDADE 15
//CONTAR ATÉ DEZ, PULANDO O SETE
i = 0;

console.log('Número de um a dez, sem sete');

while(i < 10){
    if(i == 7) continue;
    console.log(i);
}