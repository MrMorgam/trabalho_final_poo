"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArquivoError = exports.AplicacaoError = exports.QuantidadeInvalidaException = exports.NaoPossuiEstoqueException = exports.ValorDeVendaInvalidoException = exports.AnoInvalidoException = exports.OpcaoInvalidaException = exports.NumeroInvalidoException = exports.VeiculoInexistenteException = exports.VeiculoJaCadastradoException = void 0;
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
class ValorDeVendaInvalidoException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ValorDeVendaInvalidoException = ValorDeVendaInvalidoException;
class NaoPossuiEstoqueException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.NaoPossuiEstoqueException = NaoPossuiEstoqueException;
class QuantidadeInvalidaException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.QuantidadeInvalidaException = QuantidadeInvalidaException;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class ArquivoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ArquivoError = ArquivoError;
