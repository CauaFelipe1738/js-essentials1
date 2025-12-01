//1
{
    /*
    Error é um objeto que surge quando há um erro no código.
    É composto por nome, mensagem, stack, e o método toString().
    Possui tipos como EvalError, RangeError, ReferenceError
    */

    // Criação e captura de um Error Object
    try {
        const meuErro = new Error("Dados de entrada inválidos. Esperado um número.");
        // Um objeto Error existe, mas ele só afeta o fluxo se for lançado (throw).
        console.log(`Erro criado (mas não lançado): ${meuErro.message}`); 
    } catch (e) {
        // Este bloco só é alcançado se houvesse um 'throw'
    }
}

{
    /*
    Exceção (throw) é definido para passar o código para o catch
    em uma situação definida, caso não haja, o programa termina
    */

    function processarDados(valor) {
        if (typeof valor !== 'number') {
            // Lança a exceção, o fluxo síncrono é interrompido aqui.
            throw new TypeError("O valor deve ser um tipo 'number'."); 
        }
        return valor * 2;
    }

    try {
        processarDados("texto"); // Isso lançará a exceção
    } catch (erro) {
        console.log(`Exceção capturada: ${erro.name} - ${erro.message}`);
        // Saída: Exceção capturada: TypeError - O valor deve ser um tipo 'number'.
    }
}

{
    /*
    Rejeição de promessa é quando uma promise pendente falha. É capturada
    pelo catch, evitando que o programa termine repentinamente
    */

    function simularRejeicao(deveRejeitar) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (deveRejeitar) {
                    // Rejeita a Promise com um objeto Error
                    reject(new Error("Falha na conexão com o servidor.")); 
                } else {
                    resolve("Dados recebidos.");
                }
            }, 100);
        });
    }

    simularRejeicao(true)
        .then(resultado => console.log(resultado))
        .catch(erro => {
            console.log(`Rejeição de Promise capturada: ${erro.message}`);
            // Saída: Rejeição de Promise capturada: Falha na conexão com o servidor.
        });
}

{
    /*
    Uma falha fatal é um erro não capturado que leva ao encerramento
    do programa, levando aos famosos crashes
    */
   
    // Node.js: Exceção lançada sem bloco try...catch no nível superior
    function operacaoArriscada() {
        // A função é chamada de forma síncrona, mas não há um 'try...catch' acima
        throw new Error("Erro Crítico: Falha na inicialização do módulo."); 
    }

    // O processo é encerrado imediatamente antes desta linha ser executada,
    // pois o Error não foi tratado.
    operacaoArriscada(); 
    console.log("Esta linha nunca será executada."); 
    // Node.js irá logar: Uncaught Error: Erro Crítico: Falha na inicialização do módulo.
}
