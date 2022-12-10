"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculo {
    constructor(id, modelo, ano, valorDeVenda, potenciaDoMotor, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao) {
        super(id, modelo, ano, valorDeVenda);
        this._potenciaDoMotor = potenciaDoMotor;
        this._tipoDeCombustivel = tipoDeCombustivel;
        this._tipoDeCambio = tipoDeCambio;
        this._tipoDeDirecao = tipoDeDirecao;
    }
    // Métodos de leitura
    get potenciaDoMotor() {
        return this._potenciaDoMotor;
    }
    get tipoDeCombustivel() {
        return this._tipoDeCombustivel;
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
