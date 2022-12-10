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


export { VeiculoJaCadastradoException, VeiculoInexistenteException, 
         NumeroInvalidoException, OpcaoInvalidaException }