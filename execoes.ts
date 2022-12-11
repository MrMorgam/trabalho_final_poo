class VeiculoJaCadastradoException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class VeiculoInexistenteException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class NumeroInvalidoException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class OpcaoInvalidaException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class AnoInvalidoException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class ValorDeVendaInvalidoException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class NaoPossuiEstoqueException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class QuantidadeInvalidaException extends Error {
    constructor(message: string) {
        super(message);
    }
}

class AplicacaoError extends Error{
    constructor(message: string){
        super(message);
    }
}

class ArquivoError extends Error{
    constructor(message: string){
        super(message);
    }
}


export { VeiculoJaCadastradoException, VeiculoInexistenteException, 
         NumeroInvalidoException, OpcaoInvalidaException, 
         AnoInvalidoException, ValorDeVendaInvalidoException,
         NaoPossuiEstoqueException, QuantidadeInvalidaException, AplicacaoError, ArquivoError }
