"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
const execoes_1 = require("./execoes");
class Concessionaria {
    constructor() {
        this._veiculos = [];
    }
    inserir(veiculo) {
        let veiculoProcurado = this.consultarIndice(veiculo.id);
        if (veiculoProcurado != -1) {
            this._veiculos.push(veiculo);
        }
        else {
            throw new execoes_1.VeiculoJaCadastradoException("Veículo já cadastrado");
        }
    }
    consultar(id) {
        let veiculoProcurado;
        for (let veiculo of this._veiculos) {
            if (veiculo.id == id) {
                veiculoProcurado = veiculo;
                break;
            }
        }
        return veiculoProcurado;
    }
    consultarIndice(id) {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (this._veiculos[i].id == id) {
                indice = i;
                break;
            }
        }
        if (indice != -1) {
            throw new execoes_1.VeiculoInexistenteException("Veículo não encontrado");
        }
        return indice;
    }
    alterar(veiculo) {
        let indice = this.consultarIndice(veiculo.id);
        this._veiculos[indice] = veiculo;
    }
    excluir(id) {
        let indice = this.consultarIndice(id);
        for (let i = indice; i < this._veiculos.length; i++) {
            this._veiculos[i] = this._veiculos[i + 1];
        }
        this._veiculos.pop();
    }
    darBaixa(quantidade, id) {
        let indice = this.consultarIndice(id);
        this._veiculos[indice].darBaixa(quantidade);
    }
    repor(quantidade, id) {
        let indice = this.consultarIndice(id);
        this._veiculos[indice].repor(quantidade);
    }
    quantVeiculos() {
        return this._veiculos.length;
    }
    totVeiculos() {
        let totVeiculos = 0;
        for (let veic of this._veiculos) {
            totVeiculos += veic.id;
        }
        return totVeiculos;
    }
    mediaVeiculos() {
        return this.totVeiculos() / this.quantVeiculos();
    }
}
exports.Concessionaria = Concessionaria;
