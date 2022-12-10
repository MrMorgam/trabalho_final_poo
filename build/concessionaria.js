"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
const execoes_1 = require("./execoes");
class Concessionaria {
    constructor() {
        this._veiculos = [];
    }
    inserir(veic) {
        let veiculoProcurado = this.consultar(veic.id);
        if (veiculoProcurado == null) {
            this._veiculos.push(veic);
        }
        else {
            throw new execoes_1.Duplicado("Veículo já cadastrado");
        }
    }
    consultar(id) {
        let veiculoProcurado;
        for (let veic of this._veiculos) {
            if (veic.id == id) {
                veiculoProcurado = veic;
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
        return indice;
    }
    alterar(veic) {
        let indice = this.consultarIndice(veic.id);
        if (indice != -1) {
            this._veiculos[indice] = veic;
        }
        else {
            throw new execoes_1.Vazio("Veículo não está cadastrado");
        }
    }
    excluir(id) {
        let indice = this.consultarIndice(id);
        if (indice != -1) {
            for (let i = 0; i < this._veiculos.length; i++) {
                this._veiculos[i] = this._veiculos[i + 1];
            }
            this._veiculos.pop();
        }
        else {
            throw new execoes_1.Vazio("Veículo não está cadastrado");
        }
    }
    darBaixa(quantidade, id) {
        let veiculoProcurado = this.consultar(id);
        if (veiculoProcurado != null) {
            veiculoProcurado.darBaixa(quantidade);
        }
    }
    repor(quantidade, id) {
        let veiculoProcurado = this.consultar(id);
        if (veiculoProcurado != null) {
            veiculoProcurado.repor(quantidade);
        }
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
