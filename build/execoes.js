"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArquivoError = exports.AplicacaoError = exports.QuantidadeInvalidaException = exports.QuantidadeEmEstoqueInvalidaException = exports.ValorDeVendaInvalidoException = exports.AnoInvalidoException = exports.OpcaoInvalidaException = exports.NumeroInvalidoException = exports.VeiculoInexistenteException = exports.VeiculoJaCadastradoException = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class VeiculoJaCadastradoException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoJaCadastradoException = VeiculoJaCadastradoException;
class VeiculoInexistenteException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoInexistenteException = VeiculoInexistenteException;
class NumeroInvalidoException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.NumeroInvalidoException = NumeroInvalidoException;
class OpcaoInvalidaException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.OpcaoInvalidaException = OpcaoInvalidaException;
class AnoInvalidoException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.AnoInvalidoException = AnoInvalidoException;
class ValorDeVendaInvalidoException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ValorDeVendaInvalidoException = ValorDeVendaInvalidoException;
class QuantidadeEmEstoqueInvalidaException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.QuantidadeEmEstoqueInvalidaException = QuantidadeEmEstoqueInvalidaException;
class QuantidadeInvalidaException extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.QuantidadeInvalidaException = QuantidadeInvalidaException;
class ArquivoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ArquivoError = ArquivoError;
