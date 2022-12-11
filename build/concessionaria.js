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
            throw new execoes_1.VeiculoInexistenteException("Erro: veículo não encontrado");
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
            throw new execoes_1.NumeroInvalidoException("Erro: ID inválido");
        }
        return id;
    }
    validarAno(ano) {
        if (ano < 1 || ano > 2999 || ano % 1 != 0) {
            throw new execoes_1.AnoInvalidoException("Erro: ano inválido");
        }
    }
    validarValorDeVenda(valorDeVenda) {
        if (valorDeVenda <= 0) {
            throw new execoes_1.ValorDeVendaInvalidoException("Erro: valor de venda inválido");
        }
    }
    // Métodos de CRUD
    inserir(veiculo) {
        if (this.validarNumeroId(veiculo.id)) {
            this.validarAno(veiculo.ano);
            this.validarValorDeVenda(veiculo.valorDeVenda);
            let indiceVeiculoProcurado = this.consultarIndiceSemExcecao(veiculo.id);
            if (indiceVeiculoProcurado == -1) {
                this._veiculos.push(veiculo);
            }
            else {
                throw new execoes_1.VeiculoJaCadastradoException("Erro: veículo já cadastrado");
            }
        }
    }
    consultar(id) {
        let indice = this.consultarIndice(id);
        return this._veiculos[indice];
    }
    alterar(veiculo) {
        let indice = this.consultarIndice(veiculo.id);
        this.validarAno(veiculo.ano);
        this.validarValorDeVenda(veiculo.valorDeVenda);
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
        if (this.consultar(id).quantidadeEmEstoque - quantidade < 0) {
            throw new execoes_1.NaoPossuiEstoqueException("Erro: o veículo não possui estoque suficiente para realizar a operação");
        }
        if (quantidade < 0 || quantidade % 1 != 0) {
            throw new execoes_1.QuantidadeInvalidaException("Erro: quantidade inválida");
        }
        let indice = this.consultarIndice(id);
        this._veiculos[indice].darBaixa(quantidade);
    }
    repor(quantidade, id) {
        if (quantidade < 0 || quantidade % 1 != 0) {
            throw new execoes_1.QuantidadeInvalidaException("Erro: quantidade inválida");
        }
        let indice = this.consultarIndice(id);
        this._veiculos[indice].repor(quantidade);
    }
    listarVeiculos() {
        let listaVeiculos = "";
        for (let i = 0; i < this._veiculos.length; i++) {
            listaVeiculos = listaVeiculos +
                "ID: " + this._veiculos[i].id +
                " | Modelo: " + this._veiculos[i].modelo +
                " | Ano: " + this._veiculos[i].ano +
                " | Valor de venda: " + this._veiculos[i].valorDeVenda +
                " | Quantidade em estoque: " + this._veiculos[i].quantidadeEmEstoque + "\n";
        }
        return listaVeiculos;
    }
    // Método de cálculo de impostos
    calcularIPVA(id) {
        let indice = this.consultarIndice(id);
        let veiculo = this._veiculos[indice];
        return veiculo.calcularIPVA(veiculo.valorDeVenda);
    }
}
exports.Concessionaria = Concessionaria;
