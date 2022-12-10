"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = require("./concessionaria");
const veiculo_1 = require("./veiculo");
const carro_1 = require("./carro");
const moto_1 = require("./moto");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Aplicação
const input = (0, prompt_sync_1.default)();
let concessionaria = new concessionaria_1.Concessionaria();
let opcao = '';
do {
    console.clear();
    console.log("########## APP CONCESSIONÁRIA ##########");
    console.log("\nEscolha uma opção: \n");
    console.log("1 - Cadastrar \n2 - Consultar \n3 - Alterar" +
        "\n4 - Excluir \n5 - Dar baixa \n6 - Repor " +
        "\n7 - Total_Veiculos \n8 - Media_Veiculos" +
        "\n\n0 - Sair\n");
    opcao = input(">> ");
    switch (opcao) {
        case "1":
            console.clear();
            inserir();
            break;
        case "2":
            console.clear();
            consultar();
            break;
        case "3":
            console.clear();
            alterar();
            break;
        case "4":
            console.clear();
            excluir();
            break;
        case "5":
            console.clear();
            darBaixa();
            break;
        case "6":
            console.clear();
            repor();
            break;
        case "7":
            console.clear();
            totalVeiculos();
            break;
        case "8":
            console.clear();
            mediaVeiculos();
            break;
        case "0":
            break;
    }
    console.log("");
    input("Operação finalizada. Pressione <enter>");
} while (opcao != "0");
console.clear();
// Funções
function inserir() {
    console.log("CADASTRAR VEÍCULO\n");
    console.log("Informe o tipo do veículo:\n");
    console.log("1 - Carro\n2 - Moto\n");
    let opcaoVeiculo = Number(input(">> "));
    console.log("");
    let id = Number(input("Número identificador: "));
    let modelo = input("Modelo: ");
    let ano = Number(input("Ano: "));
    let valorDeVenda = Number(input("Valor de venda: "));
    if (opcaoVeiculo == 1) {
        let potenciaDoMotor = input("Potência do motor: ");
        let tipoDeCombustivel = input("Tipo de combustível: ");
        let tipoDeCambio = input("Tipo de câmbio: ");
        let tipoDeDirecao = input("Tipo de direção: ");
        let veiculo = new carro_1.Carro(id, modelo, ano, valorDeVenda, potenciaDoMotor, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
        concessionaria.inserir(veiculo);
    }
    if (opcaoVeiculo == 2) {
        let cilindradas = Number(input("Cilindradas: "));
        let veiculo = new moto_1.Moto(id, modelo, ano, valorDeVenda, cilindradas);
        concessionaria.inserir(veiculo);
    }
}
function consultar() {
    console.log("CONSULTAR VEÍCULO\n");
    const id = Number(input('Id do veículo: '));
    console.log("");
    let veiculo = concessionaria.consultar(id);
    console.log(`Número identificador: ${veiculo.id}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano: ${veiculo.ano}`);
    console.log(`Valor de venda: ${veiculo.valorDeVenda}`);
    console.log(`Quantidade em estoque: ${veiculo.quantidadeEmEstoque}`);
    if (veiculo instanceof carro_1.Carro) {
        console.log(`Potência do motor: ${veiculo.potenciaDoMotor}`);
        console.log(`Tipo de combustível: ${veiculo.tipoDeCombustivel}`);
        console.log(`Tipo de câmbio: ${veiculo.tipoDeCambio}`);
        console.log(`Tipo de direção: ${veiculo.tipoDeDirecao}`);
    }
    if (veiculo instanceof moto_1.Moto) {
        console.log(`Cilindradas: ${veiculo.cilindradas}`);
    }
}
function alterar() {
    console.log("ALTERAR CADASTRO DE VEÍCULO\n");
    let id = Number(input('Id do veículo: '));
    let veiculo;
    veiculo = new veiculo_1.Veiculo(id, '0', 0, 0);
    concessionaria.alterar(veiculo);
}
function excluir() {
    console.log("EXCLUIR CADASTRO DE VEÍCULO\n");
    let id = Number(input('Id do veículo: '));
    concessionaria.excluir(id);
}
function darBaixa() {
    console.log("DAR BAIXA EM ESTOQUE\n");
    let id = Number(input('Id do veículo: '));
    let quantidade = Number(input('Quantidade a dar baixa: '));
    concessionaria.darBaixa(quantidade, id);
}
function repor() {
    console.log("REPOR ESTOQUE\n");
    let id = Number(input('Id do veículo: '));
    let quantidade = Number(input('Quantidade a repor: '));
    concessionaria.repor(quantidade, id);
}
function totalVeiculos() {
    console.log(concessionaria.totVeiculos());
}
function mediaVeiculos() {
    console.log(concessionaria.mediaVeiculos());
}