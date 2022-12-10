"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    // Construtor
    constructor(id, modelo, ano, valorDeVenda) {
        this._id = id;
        this._modelo = modelo;
        this._ano = ano;
        this._valorDeVenda = valorDeVenda;
        this._quantidadeEmEstoque = 0;
    }
    // Métodos de leitura
    get id() {
        return this._id;
    }
    get modelo() {
        return this._modelo;
    }
    get ano() {
        return this._ano;
    }
    get valorDeVenda() {
        return this._valorDeVenda;
    }
    get quantidadeEmEstoque() {
        return this._quantidadeEmEstoque;
    }
    // Métodos de venda
    calcularValorMinimoDeEntrada() {
        return this.valorDeVenda * 0.1;
    }
    calcularParcelaDoFinanciamento(quantidadeDeParcelas, taxaDeJuros, valorDeEntrada = this.calcularValorMinimoDeEntrada()) {
        const valorFinanciado = this._valorDeVenda - valorDeEntrada;
        return valorFinanciado / quantidadeDeParcelas * taxaDeJuros;
    }
    prazoDeEntrega() {
        if (this.possuiEstoque()) {
            return 5;
        }
        return 15;
    }
    // Métodos de estoque
    possuiEstoque() {
        return this._quantidadeEmEstoque > 0;
    }
    darBaixa(quantidade) {
        this._quantidadeEmEstoque -= quantidade;
    }
    repor(quantidade) {
        this._quantidadeEmEstoque += quantidade;
    }
}
exports.Veiculo = Veiculo;
