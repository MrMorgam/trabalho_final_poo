"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validacao = exports.Vazio = exports.Duplicado = void 0;
class Duplicado extends Error {
    constructor(message) {
        super(message);
    }
}
exports.Duplicado = Duplicado;
class Vazio extends Error {
    constructor(message) {
        super(message);
    }
}
exports.Vazio = Vazio;
class Validacao extends Error {
    constructor(message) {
        super(message);
    }
}
exports.Validacao = Validacao;
