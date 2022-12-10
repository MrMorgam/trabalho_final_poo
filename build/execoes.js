"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validacao = exports.VeiculoInexistenteException = exports.VeiculoJaCadastradoException = void 0;
class VeiculoJaCadastradoException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoJaCadastradoException = VeiculoJaCadastradoException;
class VeiculoInexistenteException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoInexistenteException = VeiculoInexistenteException;
class Validacao extends Error {
    constructor(message) {
        super(message);
    }
}
exports.Validacao = Validacao;
