"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concessionaria_1 = require("./concessionaria");
const veiculo_1 = require("./veiculo");
const carro_1 = require("./carro");
const moto_1 = require("./moto");
const execoes_1 = require("./execoes");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Aplicação
const input = (0, prompt_sync_1.default)();
let concessionaria = new concessionaria_1.Concessionaria();
let opcao = '';
do {
    try {
        console.clear();
        console.log("########## APP CONCESSIONÁRIA ##########");
        console.log("\nEscolha uma opção: \n");
        console.log("1 - Cadastrar\n2 - Consultar \n3 - Alterar" +
            "\n4 - Excluir\n5 - Dar baixa em estoque\n6 - Repor em estoque" +
            "\n7 - Listar todos os veículos\n8 - Simular valor do IPVA para um veículo" +
            "\n9 - Carregar arquivo de dados\n" +
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
            case "9":
                console.clear();
                carregarArquivoDeTexto();
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
    console.log("");
    input("Operação finalizada. Pressione <enter>");
} while (opcao != "0");
console.clear();
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
    if (tipoVeiculo == 1) {
        let potenciaDoMotor = input("Potência do motor: ");
        let tipoDeCombustivel = input("Tipo de combustível: ");
        let tipoDeCambio = input("Tipo de câmbio: ");
        let tipoDeDirecao = input("Tipo de direção: ");
        let veiculo = new carro_1.Carro(id, modelo, ano, valorDeVenda, potenciaDoMotor, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
        concessionaria.inserir(veiculo);
    }
    if (tipoVeiculo == 2) {
        let cilindradas = Number(input("Cilindradas: "));
        let veiculo = new moto_1.Moto(id, modelo, ano, valorDeVenda, cilindradas);
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
    if (veiculo instanceof carro_1.Carro) {
        console.log(`Potência do motor: ${veiculo.potenciaDoMotor}`);
        console.log(`Tipo de combustível: ${veiculo.tipoDeCombustivel}`);
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
    if (veiculo1 instanceof carro_1.Carro) {
        let potenciaDoMotor = input("Potência do motor: ");
        let tipoDeCombustivel = input("Tipo de combustível: ");
        let tipoDeCambio = input("Tipo de câmbio: ");
        let tipoDeDirecao = input("Tipo de direção: ");
        let veiculo2 = new carro_1.Carro(id, modelo, ano, valorDeVenda, potenciaDoMotor, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
        concessionaria.alterar(veiculo2);
    }
    if (veiculo1 instanceof moto_1.Moto) {
        let cilindradas = Number(input("Cilindradas: "));
        let veiculo2 = new moto_1.Moto(id, modelo, ano, valorDeVenda, cilindradas);
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
    let id = Number(input('ID do veículo: '));
    console.log(concessionaria.calcularIPVA(id));
}
// Função para carregar lista de veículos em arquivo
function carregarArquivoDeTexto() {
    try {
        let LineReaderSync = require("line-reader-sync");
        let lrs = new LineReaderSync("./veiculos.txt");
        console.log("Inicializando leitura de Arquivo");
        while (true) {
            let linha = lrs.readline();
            if (linha != null) {
                let array = linha.split(",");
                let tipo = array[0];
                let id = parseFloat(array[1]);
                let modelo = array[2];
                let ano = parseFloat(array[3]);
                let valorDeVenda = parseFloat(array[4]);
                let quantidadeEmEstoque = parseFloat(array[5]);
                let veiculo;
                if (tipo == 'V') {
                    veiculo = new veiculo_1.Veiculo(id, modelo, ano, valorDeVenda);
                }
                else if (tipo == 'C') {
                    let potenciaDoMotor = array[6];
                    let tipoDeCombustivel = array[7];
                    let tipoDeCambio = array[8];
                    let tipoDeDirecao = array[9];
                    veiculo = new carro_1.Carro(id, modelo, ano, valorDeVenda, potenciaDoMotor, tipoDeCombustivel, tipoDeCambio, tipoDeDirecao);
                }
                else if (tipo == 'M') {
                    let cilindradas = parseFloat(array[10]);
                    veiculo = new moto_1.Moto(id, modelo, ano, valorDeVenda, cilindradas);
                }
                concessionaria.inserir(veiculo);
                console.log('Veículo lido: ' + veiculo.id);
            }
            else {
                console.log("Fim do Arquivo");
                break;
            }
        }
    }
    catch (e) {
        throw new execoes_1.ArquivoError("Falha ao ler veículos de arquivo");
    }
}
