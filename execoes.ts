class AplicacaoError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class VeiculoJaCadastradoException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class VeiculoInexistenteException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class NumeroInvalidoException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class OpcaoInvalidaException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class AnoInvalidoException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class ValorDeVendaInvalidoException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class QuantidadeEmEstoqueInvalidaException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class QuantidadeInvalidaException extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

class ArquivoError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}


export { VeiculoJaCadastradoException, VeiculoInexistenteException, 
         NumeroInvalidoException, OpcaoInvalidaException, 
         AnoInvalidoException, ValorDeVendaInvalidoException,
         QuantidadeEmEstoqueInvalidaException, QuantidadeInvalidaException, 
         AplicacaoError, ArquivoError }
