"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = require("./concessionaria");
const carro_1 = require("./carro");
const moto_1 = require("./moto");
const execoes_1 = require("./execoes");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
const fs = __importStar(require("fs"));
let concessionaria = new concessionaria_1.Concessionaria();
// Aplicação
function main() {
    console.clear();
    console.log("Iniciando leitura de arquivo...\n");
    try {
        carregarArquivoDeTexto();
    }
    catch (e) {
        console.log(e.message);
    }
    input("Arquivo carregado. Precione <ENTER>...");
    let opcao = '';
    do {
        try {
            console.clear();
            console.log("########## APP CONCESSIONÁRIA ##########");
            console.log("\nEscolha uma opção: \n");
            console.log("1 - Cadastrar\n2 - Consultar \n3 - Alterar" +
                "\n4 - Excluir\n5 - Dar baixa em estoque\n6 - Repor em estoque" +
                "\n7 - Listar todos os veículos\n8 - Simular valor do IPVA para um veículo" +
                "\n\n0 - Salvar e sair\n");
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
                    listarVeiculos();
                    break;
                case "8":
                    console.clear();
                    calcularIPVA();
                    break;
                case "0":
                    break;
            }
        }
        catch (e) {
            console.log("");
            if (e instanceof execoes_1.AplicacaoError) {
                console.log(e.message);
            }
            else {
                console.log("Erro inesperado: contate o administrador do sistema.");
            }
        }
        if (opcao != '0') {
            console.log("");
            input("Operação finalizada. Pressione <enter>");
        }
    } while (opcao != "0");
    console.clear();
    console.log("Salvando arquivo de texto...\n");
    try {
        salvarArquivoDeTexto();
    }
    catch (e) {
        console.log(e.messsage);
    }
    input("Arquivo salvo. Precione <ENTER>");
    console.clear();
}
// Funções de CRUD
function inserir() {
    console.log("CADASTRAR VEÍCULO\n");
    console.log("Informe o tipo do veículo:\n");
    console.log("1 - Carro\n2 - Moto\n");
    let tipoVeiculo = Number(input(">> "));
    console.log("");
    let id = Number(input("ID: "));
    let modelo = input("Modelo: ");
    let ano = Number(input("Ano: "));
    let valorDeVenda = Number(input("Valor de venda: "));
    let quantidadeEmEstoque = Number(input("Quantidade em estoque: "));
    if (tipoVeiculo == 1) {
        let tipoDeCombustivel = input("Tipo de combustível: ");
        let tipoDeCambio = input("Tipo de câmbio: ");
        let tipoDeDirecao = input("Tipo de direção: ");
        let veiculo = new carro_1.Carro(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
        concessionaria.inserir(veiculo);
    }
    if (tipoVeiculo == 2) {
        let cilindradas = Number(input("Cilindradas: "));
        let veiculo = new moto_1.Moto(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, cilindradas);
        concessionaria.inserir(veiculo);
    }
}
function consultar() {
    console.log("CONSULTAR VEÍCULO\n");
    const id = Number(input('ID: '));
    console.log("");
    let veiculo = concessionaria.consultar(id);
    console.log(`Número identificador: ${veiculo.id}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano: ${veiculo.ano}`);
    console.log(`Valor de venda: ${veiculo.valorDeVenda}`);
    console.log(`Quantidade em estoque: ${veiculo.quantidadeEmEstoque}`);
    if (veiculo instanceof carro_1.Carro) {
        console.log(`Potência do motor: ${veiculo.potenciaDoMotor}`);
        console.log(`Tipo de câmbio: ${veiculo.tipoDeCambio}`);
        console.log(`Tipo de direção: ${veiculo.tipoDeDirecao}`);
    }
    if (veiculo instanceof moto_1.Moto) {
        console.log(`Cilindradas: ${veiculo.cilindradas}`);
    }
    console.log(`Quantidade em estoque: ${veiculo.quantidadeEmEstoque}`);
}
function alterar() {
    console.log("ALTERAR CADASTRO DE VEÍCULO\n");
    let id = Number(input('ID: '));
    let veiculo1 = concessionaria.consultar(id);
    let modelo = input("Modelo: ");
    let ano = Number(input("Ano: "));
    let valorDeVenda = Number(input("Valor de venda: "));
    let quantidadeEmEstoque = Number(input("Potência do motor: "));
    if (veiculo1 instanceof carro_1.Carro) {
        let tipoDeCombustivel = input("Tipo de combustível: ");
        let tipoDeCambio = input("Tipo de câmbio: ");
        let tipoDeDirecao = input("Tipo de direção: ");
        let veiculo2 = new carro_1.Carro(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
        concessionaria.alterar(veiculo2);
    }
    if (veiculo1 instanceof moto_1.Moto) {
        let cilindradas = Number(input("Cilindradas: "));
        let veiculo2 = new moto_1.Moto(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, cilindradas);
        concessionaria.alterar(veiculo2);
    }
}
function excluir() {
    console.log("EXCLUIR CADASTRO DE VEÍCULO\n");
    let id = Number(input('ID: '));
    concessionaria.excluir(id);
}
// Funções de estoque
function darBaixa() {
    console.log("DAR BAIXA EM ESTOQUE\n");
    let id = Number(input('ID: '));
    let quantidade = Number(input('Quantidade a dar baixa: '));
    concessionaria.darBaixa(quantidade, id);
}
function repor() {
    console.log("REPOR ESTOQUE\n");
    let id = Number(input('ID: '));
    let quantidade = Number(input('Quantidade a repor: '));
    concessionaria.repor(quantidade, id);
}
function listarVeiculos() {
    console.log(concessionaria.listarVeiculos());
}
// Função para o cálculo de impostos
function calcularIPVA() {
    console.log("SIMULAR VALOR DO IPVA\n");
    let id = Number(input("ID: "));
    console.log(`R$ ${concessionaria.calcularIPVA(id)}`);
}
// Funções para carregar e salvar lista de veículos em arquivo
function carregarArquivoDeTexto() {
    let enderecoDoArquivo = "../veiculos.txt";
    let arquivo;
    try {
        arquivo = fs.readFileSync(enderecoDoArquivo, 'utf8').toString();
    }
    catch (e) {
        throw new execoes_1.ArquivoError("Erro ao carregar o arquivo");
    }
    let veiculos = arquivo.split("\n");
    for (let i = 0; i < veiculos.length; i++) {
        let dadosArquivo = veiculos[i].split(",");
        let tipo = Number(dadosArquivo[0]);
        let id = Number(dadosArquivo[1]);
        let modelo = dadosArquivo[2];
        let ano = Number(dadosArquivo[3]);
        let valorDeVenda = Number(dadosArquivo[4]);
        let quantidadeEmEstoque = Number(dadosArquivo[5]);
        if (tipo == 1) {
            let tipoDeCombustivel = dadosArquivo[6];
            let tipoDeCambio = dadosArquivo[7];
            let tipoDeDirecao = dadosArquivo[8];
            let novoVeiculo = new carro_1.Carro(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
            concessionaria.inserir(novoVeiculo);
        }
        if (tipo == 2) {
            let cilindradas = Number(dadosArquivo[5]);
            let novoVeiculo = new moto_1.Moto(id, modelo, ano, valorDeVenda, quantidadeEmEstoque, cilindradas);
            concessionaria.inserir(novoVeiculo);
        }
    }
}
function salvarArquivoDeTexto() {
    let enderecoDoArquivo = "../veiculos.txt";
    let veiculos = [];
    for (let i = 0; i < concessionaria.contarVeiculos(); i++) {
        veiculos[i] = concessionaria.consultarPorIndice(i);
    }
    let stringDeDados = "";
    for (let i = 0; i < veiculos.length; i++) {
        let tipo;
        let id = String(veiculos[i].id);
        let modelo = veiculos[i].modelo;
        let ano = String(veiculos[i].ano);
        let valorDeVenda = String(veiculos[i].valorDeVenda);
        let quantidadeEmEstoque = String(veiculos[i].quantidadeEmEstoque);
        if (veiculos[i] instanceof carro_1.Carro) {
            tipo = "1";
            let potenciaDoMotor = veiculos[i].potenciaDoMotor;
            let tipoDeCambio = veiculos[i].tipoDeCambio;
            let tipoDeDirecao = veiculos[i].tipoDeDirecao;
            stringDeDados += `${tipo},${id},${modelo},${ano},${valorDeVenda},` +
                `${quantidadeEmEstoque},${potenciaDoMotor},` +
                `${tipoDeCambio},${tipoDeDirecao}\n`;
        }
        if (veiculos[i] instanceof moto_1.Moto) {
            tipo = "2";
            let cilindradas = veiculos[i].cilindradas;
            stringDeDados += `${tipo},${id},${modelo},${ano},${valorDeVenda},` +
                `${quantidadeEmEstoque},${cilindradas}\n`;
        }
    }
    try {
        fs.writeFileSync(enderecoDoArquivo, stringDeDados);
    }
    catch (e) {
        throw new execoes_1.ArquivoError("Erro ao salvar o arquivo");
    }
}
main();
