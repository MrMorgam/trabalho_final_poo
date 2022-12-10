"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = require("./concessionaria");
const veiculo_1 = require("./veiculo");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
let concessionaria = new concessionaria_1.Concessionaria();
let opcao = '';
do {
    console.log("\nEscolha uma opção: ");
    console.log("1 - Cadastrar \n2 - Consultar \n3 - Alterar" +
        "\n4 - Excluir \n5 - Dar baixa \n6 - Repor " +
        "\n7 - Total_Veiculos \n8 - Media_Veículos" +
        "\n0 - Sair");
    opcao = input("Opção: ");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            alterar();
            break;
        case "4":
            excluir();
            break;
        case "5":
            darBaixa();
            break;
        case "6":
            repor();
            break;
        case "7":
            totVeiculos();
            break;
        case "8":
            mediaVeiculos();
            break;
        case "0":
            break;
    }
    input("Operação finalizada. Pressione <enter>");
    console.clear();
} while (opcao != "0");
console.log("Aplicação Encerrada");
function inserir() {
    console.log("\nCadastrar Conta\n");
    let id = Number(input("Número identificador: "));
    let modelo = input("Modelo: ");
    let ano = Number(input("Ano: "));
    let valorDeVenda = Number(input("Valor de venda: "));
    let veiculo;
    veiculo = new veiculo_1.Veiculo(id, modelo, ano, valorDeVenda);
    concessionaria.inserir(veiculo);
}
function consultar() {
    console.log("\nConsultar Veículo\n");
    let id = Number(input('Informe o id do veiculo: '));
    console.log(concessionaria.consultar(id));
}
function alterar() {
    console.log("\nAlterar Conta\n");
    let id = Number(input('Informe o id do veículo: '));
    let veiculo;
    veiculo = new veiculo_1.Veiculo(id, '0', 0, 0);
    concessionaria.alterar(veiculo);
}
function excluir() {
    console.log("\nExcluir Conta\n");
    let id = Number(input('Informe o id do veículo: '));
    concessionaria.excluir(id);
}
function darBaixa() {
    let id = Number(input('Informe o id do veículo: '));
    let quantidade = Number(input('Quantidade: '));
    concessionaria.darBaixa(quantidade, id);
}
function repor() {
    let id = Number(input('Informe o id do veículo: '));
    let quantidade = Number(input('Quantidade: '));
    concessionaria.repor(quantidade, id);
}
function totVeiculos() {
    concessionaria.totVeiculos();
}
function mediaVeiculos() {
    concessionaria.mediaVeiculos();
}
