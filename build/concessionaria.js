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
        if (typeof id != "number" || isNaN(id) || id <= 0 || id % 1 != 0) {
            throw new execoes_1.NumeroInvalidoException("Número identificador inválido");
        }
        return id;
    }
    validarAno(ano) {
        if ((ano < 0 && ano < 2999) || ano % 1 != 0) {
            throw new execoes_1.AnoInvalidoException("Ano inválido");
        }
        return ano;
    }
    validarValorDeVenda(valorDeVenda) {
        if (valorDeVenda <= 0) {
            throw new execoes_1.valorDeVendaInvalidoException("Valor de venda inválido");
        }
        return valorDeVenda;
    }
    // Métodos de CRUD
    inserir(veiculo) {
        if (this.validarNumeroId(veiculo.id)) {
            let indiceVeiculoProcurado = this.consultarIndiceSemExcecao(veiculo.id);
            this.validarAno(veiculo.ano);
            this.validarValorDeVenda(veiculo.valorDeVenda);
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
    CalcularquantidadeVeiculos() {
        return this._veiculos.length;
    }
    listaVeiculos() {
        let listaVeiculos = '';
        for (let i = 0; i < this._veiculos.length; i++) {
            listaVeiculos = listaVeiculos +
                ' Id: ' + this._veiculos[i].id +
                ' - Modelo: ' + this._veiculos[i].modelo +
                ' - Ano: ' + this._veiculos[i].ano +
                ' - Valor de Venda: ' + this._veiculos[i].valorDeVenda +
                ' - Quantidade em Estoque: ' + this._veiculos[i].quantidadeEmEstoque + '\n';
        }
        return listaVeiculos;
    }
}
exports.Concessionaria = Concessionaria;
