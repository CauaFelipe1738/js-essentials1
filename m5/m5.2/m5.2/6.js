/**
 * Classe base para todos os erros customizados de validação.
 * Suporta o encadeamento de erros através da propriedade 'cause' (ES2022).
 */
class BaseError extends Error {
    constructor(message, cause, name = 'BaseError') {
        // Suporte ao 'cause' no construtor padrão do Error
        super(message, { cause });
        this.name = name;
        
        // Define 'cause' explicitamente para garantir que seja serializável
        this.cause = cause;
    }

    /**
     * Serializa o erro de forma segura para envio pela rede.
     * Exclui o stack trace por padrão para evitar vazamento de informações.
     * @returns {object} Objeto com nome, mensagem e causa (serializada se for um Error).
     */
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            // Serializa a causa recursivamente se for um erro, ou a inclui se for um valor simples
            cause: this.cause instanceof Error ? JSON.parse(JSON.stringify(this.cause)) : this.cause
        };
    }
}

/**
 * Erro específico para valores de idade inválidos (fora do escopo).
 */
class InvalidAgeError extends BaseError {
    constructor(message, cause) {
        super(message, cause, 'InvalidAgeError');
    }
}

/**
 * Erro de validação que pode agrupar múltiplas mensagens.
 * Expõe um método 'flatten' para retornar a lista de mensagens.
 */
class ValidationError extends BaseError {
    constructor(messages = [], cause) {
        // Mensagem principal é a primeira mensagem ou uma mensagem genérica
        const message = messages.length > 0 ? messages[0] : 'One or more validation errors occurred.';
        super(message, cause, 'ValidationError');
        this.messages = Array.isArray(messages) ? messages : [messages];
    }

    /**
     * Retorna uma lista legível de todas as mensagens de erro.
     * @returns {string[]} Lista de mensagens.
     */
    flatten() {
        return this.messages;
    }

    /**
     * Sobrescreve toJSON para incluir todas as mensagens na serialização.
     */
    toJSON() {
        return {
            ...super.toJSON(),
            messages: this.messages
        };
    }
}

/**
 * Valida o valor da idade e lança InvalidAgeError com a causa específica.
 * @param {number} age - O valor da idade a ser verificado.
 * @throws {InvalidAgeError} - Com cause TypeError se for NaN, ou RangeError se fora do intervalo.
 */
function checkAge(age) {
    // 1. Verificar NaN (Not a Number)
    if (isNaN(age)) {
        // Lança InvalidAgeError com cause apontando para o erro de tipo
        throw new InvalidAgeError(
            'Age must be a valid number.',
            // Define o cause como um TypeError
            new TypeError(`Expected a number, received ${typeof age}`)
        );
    }

    // 2. Verificar intervalo
    if (age < 0 || age > 150) {
        // Lança InvalidAgeError com cause apontando para o erro de intervalo
        throw new InvalidAgeError(
            `Age ${age} is out of the valid range (0-150).`,
            // Define o cause como um RangeError
            new RangeError('Value is outside the expected numerical bounds.')
        );
    }

    return true;
}

// --- Implementação Simples de Testes (para ambiente sem Jest/Mocha) ---

/**
 * Função utilitária de asserção simples
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(`Assertion Failed: ${message}`);
    }
} 

function runTests(){
    console.log("--- Executando Testes de Erro Personalizado (Exercício 7) ---");

    // 1. Teste de Validação Válida
    try {
        assert(checkAge(30) === true, "Validação de idade 30 falhou.");
        console.log("✅ Teste 1: Idade válida (30) OK.");
    } catch (e) {
        console.error("❌ Teste 1 Falhou:", e.message);
    }

    // 2. Teste de NaN (Cause: TypeError)
    try {
        checkAge(NaN);
    } catch (err) {
        // Assert: instanceof, cause, e cause.name
        assert(err instanceof InvalidAgeError, "Teste 2: Deve ser InvalidAgeError.");
        assert(err.cause instanceof TypeError, "Teste 2: Cause deve ser TypeError.");
        assert(err.cause.message.includes('Expected a number'), "Teste 2: Mensagem de cause incorreta.");
        console.log("✅ Teste 2: NaN (Cause: TypeError) OK.");

        // Assert: Serialização
        const jsonStr = JSON.stringify(err);
        const expectedSchema = {
            name: 'InvalidAgeError',
            message: 'Age must be a valid number.',
            cause: {
                name: 'TypeError',
                // A mensagem original do TypeError deve ser preservada (sem stack)
                message: err.cause.message 
            }
        };
        // Compara a estrutura JSON gerada com o schema esperado (sem stacks)
        assert(JSON.stringify(JSON.parse(jsonStr)) === JSON.stringify(expectedSchema), 
               "Teste 2: Serialização JSON falhou ou incluiu stack.");
        console.log("✅ Teste 2: Serialização JSON segura (sem stack) OK.");
    }

    // 3. Teste de Range Out (Cause: RangeError)
    try {
        checkAge(200);
    } catch (err) {
        // Assert: instanceof, cause, e cause.name
        assert(err instanceof InvalidAgeError, "Teste 3: Deve ser InvalidAgeError.");
        assert(err.cause instanceof RangeError, "Teste 3: Cause deve ser RangeError.");
        assert(err.message.includes('out of the valid range'), "Teste 3: Mensagem de erro incorreta.");
        console.log("✅ Teste 3: Range Out (Cause: RangeError) OK.");
    }

    // 4. Teste de ValidationError e flatten()
    const validationError = new ValidationError([
        'Campo Nome é obrigatório.',
        'Campo E-mail inválido.'
    ]);
    assert(validationError instanceof ValidationError, "Teste 4: Deve ser ValidationError.");
    assert(validationError.flatten().length === 2, "Teste 4: Flatten deve retornar 2 mensagens.");
    
    // Assert: Serialização de ValidationError
    const validationJson = JSON.stringify(validationError);
    const validationSchema = {
        name: 'ValidationError',
        message: 'Campo Nome é obrigatório.',
        cause: undefined,
        messages: ['Campo Nome é obrigatório.', 'Campo E-mail inválido.']
    };
    assert(JSON.stringify(JSON.parse(validationJson)) === JSON.stringify(validationSchema), 
           "Teste 4: Serialização de ValidationError falhou.");
    console.log("✅ Teste 4: ValidationError e flatten() OK.");
    
    console.log("--- Todos os testes concluídos. ---");
}

runTests();