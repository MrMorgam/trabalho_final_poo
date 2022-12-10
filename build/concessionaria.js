"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
const execoes_1 = require("./execoes");
class Concessionaria {
    constructor() {
        this._veiculos = [];
    }
    // Método para consultar índice
    consultarIndice(id) {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (this._veiculos[i].id == id) {
                indice = i;
                break;
            }
        }
        if (indice == -1) {
            throw new execoes_1.VeiculoInexistenteException("Veículo não encontrado");
        }
        return indice;
    }
    consultarIndiceSemExcecao(id) {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (this._veiculos[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    // Métodos de validação
    validarNumeroId(id) {
        if (typeof id != "number" || isNaN(id) || id == undefined) {
            throw new execoes_1.NumeroInvalidoException("Formato de número inválido");
        }
        if (id <= 0) {
            throw new execoes_1.NumeroInvalidoException("O número identificador deve ser positivo");
        }
        if (id % 1 != 0) {
            throw new execoes_1.NumeroInvalidoException("O número identificador deve ser inteiro");
        }
        return id;
    }
    // Métodos de CRUD
    inserir(veiculo) {
        if (this.validarNumeroId(veiculo.id)) {
            let indiceVeiculoProcurado = this.consultarIndiceSemExcecao(veiculo.id);
            if (indiceVeiculoProcurado == -1) {
                this._veiculos.push(veiculo);
            }
            else {
                throw new execoes_1.VeiculoJaCadastradoException("Veículo já cadastrado");
            }
        }
    }
    consultar(id) {
        let indice = this.consultarIndice(id);
        return this._veiculos[indice];
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
    // Métodos de estoque
    darBaixa(quantidade, id) {
        let indice = this.consultarIndice(id);
        this._veiculos[indice].darBaixa(quantidade);
    }
    repor(quantidade, id) {
        let indice = this.consultarIndice(id);
        this._veiculos[indice].repor(quantidade);
    }
    // Demais métodos
    quantVeiculos() {
        return this._veiculos.length;
    }
    totalVeiculos() {
        let totVeiculos = 0;
        for (let veiculo of this._veiculos) {
            totVeiculos += veiculo.id;
        }
        return totVeiculos;
    }
    mediaVeiculos() {
        return this.totalVeiculos() / this.quantVeiculos();
    }
}
exports.Concessionaria = Concessionaria;
