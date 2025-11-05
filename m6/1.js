{
    //Definições básicas

    //1
    console.log('O que é um erro?\n\n O erro é qualquer erro cometido na criação e execução do programa');

    //2
    console.log('O que é uma exceção?\n\n É um tipo específico de erro, que quando percebido interrompe o programa a não ser que tenha um catch no software');

    //3
    console.log('Diferença entre erro e exceção\n\nToda exceção é um erro, porém, nem todo erro é exceção. Por exemplo, tentar usar variáveis não inicializadas causa uma exceção');
}

{
    //Erros sem exceções

    //Cálculo de idade
    let ano_atual = 2025;
    let ano_nascimento = 2008

    console.log(ano_nascimento - ano_atual); //Retorna um valor negativo, que não é esperado, porém, o código continua.
}

{
    //Confiabilidade limitada

    let x = prompt("Digite um número");
    //Caso escreva algo fora do esperado, deve-se usar uma função que corrija ou analise o prompt evitando envio dados errados
    //Por exemplo, o uso de isString()
}

{
    //Tipos de erros

    console.log('ReferenceError: Acontece quando você tenta usar uma variável ou função que não existe no contexto atual');
    console.log('TypeError: Ocorre quando você tenta fazer uma operação em um valor que não suporta aquela ação.');
    console.log('SyntaxError: Surge quando o motor do JavaScript não consegue interpretar seu código devido a erro de sintaxe.');
}

{
    //try catch básico: transforma json em objeto
    function safeParse(jsonString){
        try{
            return JSON.parse(jsonString);
        }catch(err){
            console.log('Ocorreu um erro ao converter JSON', err.message);
        }
    }

    console.log(safeParse('{"nome": "Ana maria"}')); // → { nome: "Leandromeda" }
    console.log(safeParse('texto inválido'));     // → null
}

{
    //try catch básico: transforma json em objeto, com catch condicional
    function safeParse(jsonString){
        try{
            return JSON.parse(jsonString);
        }catch(err){
            if(err instanceof SyntaxError){
                return null;
            }else{
                //relança
                throw err;
            }
        }
    }

    console.log(safeParse('{"nome": "Ana maria"}')); // → { nome: "Leandromeda" }
    console.log(safeParse('texto inválido'));     // → null
}

{
    //try catch básico: transforma json em objeto, com catch condicional e finally
    function safeParse(jsonString){
        try{
            return JSON.parse(jsonString);
        }catch(err){
            if(err instanceof SyntaxError){
                return null;
            }else{
                //relança
                throw err;
            }
        }finally{
            console.log('Parse attempt finished');
        }
    }

    console.log(safeParse('{"nome": "Ana maria"}')); // → { nome: "Leandromeda" }
    console.log(safeParse('texto inválido'));     // → null
}

{
    //Lançando erros customizados
    //As classes são melhores para ampliar a delimitação de erros

    class InvalidAgeError extends Error {
        constructor(message) {
            super(message);       // seta message e stack corretamente
            this.name = "InvalidAgeError";
        }
    }

    function checkAge(age) {
        if (typeof age !== "number") {
            throw new TypeError("Tipo de idade inválido");
        }
        if (age < 0 || age > 120) {
            throw new InvalidAgeError("Idade fora do intervalo (0–120)");
        }
        return "Idade válida";
    }

    // Testes
    try {
        console.log(checkAge(30));   // "Idade válida"
        console.log(checkAge(-5));   // lança InvalidAgeError
    } catch (err) {
        if (err instanceof InvalidAgeError) {
            console.error("Erro customizado:", err.message);
        } else {
            console.error("Outro erro:", err);
        }
    }
}

{
    //Teste de software: qual o erro?

    //Função soma
    function soma(a, b) {
        console.log(a);
        console.log(b);
        return a + b;
    }

    console.log(soma(2, undefined)); //Undefined é um valor primitivo, não correspondendo a um valor como String ou Number, gerando NaN (Not a Number)
}

{
    console.log('Como abrir ferramentas de desenvolvedores do navegador?');

    console.log('Em uma página de browser, clique com botão direito do mouse e selecione Inspecionar.\nNa área abrerta, procure por Sources');
}

{
    //No navegador, recarregue a página e verifique o que acontece quando a execução atingir debugger. Escreva um pequeno relatório (2–3 linhas) sobre sua experiência.

    function testeDebug(x) {
        const y = x * 2;
        debugger;
        return y;
    }
    testeDebug(5);

    //O debugger pausa o código quando executado, permitindo que o dev analise individualmente a situação do programa e valores de variável
    //No debugger, o dev pode avançar o código linha por linha
}

{
    function externo(n) {
        return interno(n) + 1;
    }

    function interno(m) {
        return m * 3;
    }

    externo(4);

    /*- Se você usar **Step Over**, o JS roda `interno(4)` sem entrar ali, calcula o retorno `12`, adiciona `1` = `13` e volta ao contexto anterior.
      - Se usar **Step Into**, ao encontrar `interno(4)`, a depuração entra dentro de `interno` e pausa em `return m * 3;` com `m = 4`.
      - Quando estiver dentro de `interno`, use **Step Out** para finalizar `interno` e voltar para `externo`, levando o resultado calculado.*/
}

{
    /*
        > externo (4)
            > interno(4)
    */
}
