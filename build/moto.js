"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.Veiculo {
    constructor(id, modelo, ano, valorDeVenda, cilindradas) {
        super(id, modelo, ano, valorDeVenda);
        this._cilindradas = cilindradas;
    }
    // Método de cálculo de impostos
    calcularIPVA(valorVenal) {
        return valorVenal * 0.02;
    }
}
