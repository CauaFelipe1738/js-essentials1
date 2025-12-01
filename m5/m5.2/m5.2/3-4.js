{ //3
    function validatePayload(payload, schema){
        let ValidationError = [];

        if (typeof schema != Array || typeof schema != Object){
        
            let throwerr = {
                path: 'user.address.zip',
                expected: 'user2.address.zip',
                received: typeof schema,
                message: 'Tipo de encaminhamento incorreto'
            };

            ValidationError.push(throwerr);
            return throwerr;
        }

        for(let i = 0; i < schema.lenght; i++){
            if (typeof schema[i] != String){
                let throwerr = {
                    path: 'user.address.zip',
                    expected: 'user2.address.zip',
                    received: typeof schema[i],
                    message: 'Tipo de encaminhamento de item incorreto'
                };

                ValidationError.push(throwerr);
                return throwerr;
            }
        }

        if (typeof payload != Number || payload < 0){
            return payload = NaN;
        }

        return "Nenhum erro encontrado"
    }

    

    console.log(validatePayload(20));
    console.log(validatePayload(20, "Cartão"));
    console.log(validatePayload(-30, []));
    console.log(validatePayload(20, ['Cartão']));
    console.log(validatePayload(20, ['Cartão', 2]));
}

{ //4

    //TypeError
    const x = 'Hello';
    x = 'World'; //Erro, porque tipo const não pode ser alterado

    //SyntaxError
    onsole.log('Hello'); //Comando escrito errado

    //RangeError
    new Array(-1); //Não há como criar vetor com quantidade negativa de itens

    //ReferenceError
    console.log(y); //variavel y não foi declarada

    //AggregateError
    Promise.any([Promise.reject(new Error("erro"))]).catch((e) => {
        console.log(e instanceof AggregateError); // true
        console.log(e.message); // "All Promises rejected"
        console.log(e.name); // "AggregateError"
        console.log(e.errors); // [ Error: "some error" ]
    }); //Vários erros ocorrem em uma mesma circustância, causando o AggregateError
}