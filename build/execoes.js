"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valorDeVendaInvalidoException = exports.AnoInvalidoException = exports.OpcaoInvalidaException = exports.NumeroInvalidoException = exports.VeiculoInexistenteException = exports.VeiculoJaCadastradoException = void 0;
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
class NumeroInvalidoException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.NumeroInvalidoException = NumeroInvalidoException;
class OpcaoInvalidaException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.OpcaoInvalidaException = OpcaoInvalidaException;
class AnoInvalidoException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AnoInvalidoException = AnoInvalidoException;
class valorDeVendaInvalidoException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.valorDeVendaInvalidoException = valorDeVendaInvalidoException;
