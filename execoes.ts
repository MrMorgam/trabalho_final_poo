class Duplicado extends Error {
    constructor(message: string) {
        super(message);
    }
}

class Vazio extends Error {
    constructor(message: string) {
        super(message);
    }
}

class Validacao extends Error{
    constructor(message: string) {
        super(message);
    }
}


export { Duplicado, Vazio, Validacao }