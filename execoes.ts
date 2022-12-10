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

class Validacao extends Error{
    constructor(message: string) {
        super(message);
    }
}


export { VeiculoJaCadastradoException, 
         VeiculoInexistenteException, Validacao }