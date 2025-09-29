//lista de times
let times = ['Flamengo', 'Palmeiras', 'São Paulo'];

times.push('Corinthians'); //Adiciona Corinthians no final
console.log(times);

times.unshift('Grêmio'); // Adiciona Grêmio no final
console.log(times);

times.pop(); // Remove o último time
console.log(times);

//Encontra o posição do Palmeiras
console.log(times.indexOf('Palmeiras'));

//Encontra o posição do Palmeiras
console.log(times.reverse());