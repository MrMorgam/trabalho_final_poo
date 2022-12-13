"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculo {
    _potenciaDoMotor;
    _tipoDeCambio;
    _tipoDeDirecao;
    constructor(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, potenciaDoMotor, tipoDeCambio, tipoDeDirecao) {
        super(id, modelo, ano, valorDeVenda, quantidadeEmEstoque);
        this._potenciaDoMotor = potenciaDoMotor;
        this._tipoDeCambio = tipoDeCambio;
        this._tipoDeDirecao = tipoDeDirecao;
    }
    // Métodos de leitura
    get potenciaDoMotor() {
        return this._potenciaDoMotor;
    }
    get tipoDeCambio() {
        return this._tipoDeCambio;
    }
    get tipoDeDirecao() {
        return this._tipoDeDirecao;
    }
    // Método de cálculo de impostos
    calcularIPVA(valorVenal) {
        return valorVenal * 0.025;
    }
}
exports.Carro = Carro;
