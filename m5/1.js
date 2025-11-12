{
    function Hello() {console.log("Hello, World!");}

    // chama a função
    Hello(); // Hello, World!
}

{
    function soma(a, b) {
        return a + b;
    }

    const resultado = soma(5, 7);
    console.log(resultado); // 12
}

{
    function localExample() {
        const message = "Variável local";
        console.log("Dentro: ", message);
    }

    localExample(); // Dentro: Variável local

    // Fora da função:
    console.log("Fora: ", message); // ReferenceError: message is not defined
}

{
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet("Fullstack");    // Hello, Fullstack!
}

{
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }

    console.log(calculateArea(2)); // 12.566370614359172
}

{
    function currentDate() {
        const today = new Date();
        console.log(today);
    }

    currentDate(); // imprime a data e horário, que muda dependendo da faixa horária
}

{
    //variável global
    let x = 10;

    function shadowExample(x) {
        console.log("parâmetro x:", x); // valor passado à função
        console.log("global x acessível via window.x (ou globalThis.x):", globalThis.x);
    }

    shadowExample(20);
    // Saída esperada:
    // parâmetro x: 20
    // global x acessível via window.x (ou globalThis.x): 10
}

{
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;

        // checar divisores até sqrt(n)
        const limit = Math.floor(Math.sqrt(n));
        for (let i = 2; i <= limit; i++) {
            if (n % i === 0) {
                return false; // encontrou divisor
            }
        }
        return true; // nenhum divisor encontrado
    }

    console.log(isPrime(2));  // true
    console.log(isPrime(15)); // false
    console.log(isPrime(67)); // true
}

{
    function toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    console.log(toFahrenheit(0));   // 32
    console.log(toCelsius(212));    // 100
}

{
    //retorna o maior valor de um array de número
    function getMax(arr) {
        if (arr.length === 0) return undefined; // evita processo com array vazio
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {max = arr[i];}
        }
        return max;
    }

    console.log(getMax([3, 7, 2, 9, 5])); // 9
}

{
    function average(scores) {
    if (scores.length === 0) return 0; // ou undefined dependendo do design
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
    }

    console.log(average([8, 7.5, 9, 10])); // (8 + 7.5 + 9 + 10) / 4 = 8.625
}

{
    function fullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }

    console.log(fullName("Maria", "Silva")); // Maria Silva
}

{
    function double(n) {
    return n * 2;
    }

    function quadruple(n) {
    return double(double(n));
    }

    console.log(quadruple(3)); // 12
}

{
    let mode = "light"; // global

    function toggleMode(mode) {
    // parâmetro 'mode' faz shadowing da global
    let newMode;
    if (mode === "light") {
        newMode = "dark";
    } else {
        newMode = "light";
    }
    console.log("modo dentro da função:", newMode); // local
    return newMode;
    }

    const localResult = toggleMode(mode); // passa valor da global
    console.log("resultado retornado:", localResult);
    console.log("modo global ainda é:", mode); // global continua "light"
}

{
    let analysisType = "sum"; // variável global

    function analyzeNumbers(analysisType, numbers) {
    // O parâmetro 'analysisType' faz shadowing da global
    console.log("valor do parâmetro (shadowed) analysisType dentro da função:", analysisType);
    console.log("valor da global analysisType via globalThis.analysisType:", globalThis.analysisType);

    // função auxiliar para somar
    function sumNumbers(arr) {
        let total = 0; // variável local acumuladora
        for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        }
        return total;
    }

    // função auxiliar para média
    function averageNumbers(arr) {
        if (arr.length === 0) return 0;
        const total = sumNumbers(arr); // reuso da função auxiliar
        return total / arr.length;
    }

    // decisão baseada no parâmetro local (shadowed)
    if (analysisType === "sum") {
        return sumNumbers(numbers);
    } else if (analysisType === "average") {
        return averageNumbers(numbers);
    } else {
        throw new Error("Tipo de análise desconhecido: " + analysisType);
    }
    }

    // Chamadas fora da função
    console.log(analyzeNumbers("sum", [1, 2, 3, 4]));     // 10
    console.log(analyzeNumbers("average", [1, 2, 3, 4])); // 2.5

    // Mostrar que a global não mudou a menos que a atribuamos:
    console.log("global analysisType após chamadas:", analysisType); // "sum"
}
