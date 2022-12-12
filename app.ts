import { Concessionaria } from "./concessionaria";
import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";
import { AplicacaoError, ArquivoError } from "./execoes";
import prompt from "prompt-sync";
import * as fs from "fs";


// Aplicação

const input = prompt();
let concessionaria: Concessionaria = new Concessionaria();
let opcao: string = '';

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

        switch(opcao) {
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
    } catch (e: any) {
        console.log("")

        if (e instanceof AplicacaoError) {
            console.log(e.message);
        } else {
            console.log("Erro inesperado: contate o administrador do sistema.");
        }
    }

    console.log("");
    input("Operação finalizada. Pressione <enter>");
} while (opcao != "0");

console.clear();


// Funções de CRUD

function inserir(): void {
    console.log("CADASTRAR VEÍCULO\n");
    console.log("Informe o tipo do veículo:\n");
    console.log("1 - Carro\n2 - Moto\n");
    let tipoVeiculo: number = Number(input(">> "));
    console.log("");

    let id: number = Number(input("ID: "));
    let modelo: string = input("Modelo: ");
    let ano: number = Number(input("Ano: "));
    let valorDeVenda: number = Number(input("Valor de venda: "));

    if (tipoVeiculo == 1) {
        let potenciaDoMotor: string = input("Potência do motor: ");
        let tipoDeCombustivel: string = input("Tipo de combustível: ");
        let tipoDeCambio: string = input("Tipo de câmbio: ");
        let tipoDeDirecao: string = input("Tipo de direção: ");


        let veiculo: Carro = new Carro(id, modelo, ano, valorDeVenda, 
                                       potenciaDoMotor, tipoDeCombustivel, 
                                       tipoDeCambio, tipoDeDirecao);

        concessionaria.inserir(veiculo);
    }


    if (tipoVeiculo == 2) {
        let cilindradas: number = Number(input("Cilindradas: "));

        let veiculo: Moto = new Moto(id, modelo, ano, valorDeVenda, cilindradas);

        concessionaria.inserir(veiculo);
    }

    
}

function consultar(): void {
    console.log("CONSULTAR VEÍCULO\n");
    const id: number = Number(input('ID: '));
    console.log("");

    let veiculo: Veiculo = concessionaria.consultar(id);
    console.log(`Número identificador: ${veiculo.id}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano: ${veiculo.ano}`);
    console.log(`Valor de venda: ${veiculo.valorDeVenda}`);

    if (veiculo instanceof Carro) {
        console.log(`Potência do motor: ${veiculo.potenciaDoMotor}`);
        console.log(`Tipo de combustível: ${veiculo.tipoDeCombustivel}`);
        console.log(`Tipo de câmbio: ${veiculo.tipoDeCambio}`);
        console.log(`Tipo de direção: ${veiculo.tipoDeDirecao}`);
    }

    if (veiculo instanceof Moto) {
        console.log(`Cilindradas: ${veiculo.cilindradas}`);
    }

    console.log(`Quantidade em estoque: ${veiculo.quantidadeEmEstoque}`);
}

function alterar(): void {
    console.log("ALTERAR CADASTRO DE VEÍCULO\n");
    let id: number = Number(input('ID: '));
    
    let veiculo1: Veiculo = concessionaria.consultar(id);

    let modelo: string = input("Modelo: ");
    let ano: number = Number(input("Ano: "));
    let valorDeVenda: number = Number(input("Valor de venda: "));

    if (veiculo1 instanceof Carro) {
        let potenciaDoMotor: string = input("Potência do motor: ");
        let tipoDeCombustivel: string = input("Tipo de combustível: ");
        let tipoDeCambio: string = input("Tipo de câmbio: ");
        let tipoDeDirecao: string = input("Tipo de direção: ");


        let veiculo2: Carro = new Carro(id, modelo, ano, valorDeVenda, 
                                       potenciaDoMotor, tipoDeCombustivel, 
                                       tipoDeCambio, tipoDeDirecao);

        concessionaria.alterar(veiculo2);
    }


    if (veiculo1 instanceof Moto) {
        let cilindradas: number = Number(input("Cilindradas: "));

        let veiculo2: Moto = new Moto(id, modelo, ano, valorDeVenda, cilindradas);

        concessionaria.alterar(veiculo2);
    }
}

function excluir(): void{
    console.log("EXCLUIR CADASTRO DE VEÍCULO\n");
    let id: number = Number(input('ID: '));
    concessionaria.excluir(id);
}


// Funções de estoque

function darBaixa(): void {
    console.log("DAR BAIXA EM ESTOQUE\n");
    let id: number = Number(input('ID: '));
    let quantidade: number = Number(input('Quantidade a dar baixa: '));
    concessionaria.darBaixa(quantidade, id);
}

function repor(): void {
    console.log("REPOR ESTOQUE\n");
    let id: number = Number(input('ID: '));
    let quantidade: number = Number(input('Quantidade a repor: '));
    concessionaria.repor(quantidade, id);
}

function listarVeiculos(): void {
    console.log(concessionaria.listarVeiculos());
}


// Função para o cálculo de impostos

function calcularIPVA(): void {
    console.log("SIMULAR VALOR DO IPVA\n");
    let id: number = Number(input('ID: '));

    console.log(`R$ ${concessionaria.calcularIPVA(id)}`);
}


// Função para carregar lista de veículos em arquivo

function carregarArquivoDeTexto() {
    console.log("Iniciando leitura de arquivo...\n");

    let enderecoDoArquivo: string = "./veiculos.txt";
    let arquivo: string = fs.readFileSync(enderecoDoArquivo, { encoding: 'utf8', flag: 'r' }).toString();
    console.log("Arquivo carregado");

    let veiculos: string[] = arquivo.split("\n");

    for (let i = 0; i < veiculos.length; i++) {
        let dadosArquivo: string[] = veiculos[i].split(",");

        let tipo: number = Number(dadosArquivo[0]);
        
        console.log(tipo);

        if (tipo == 1) {
            let id: number = Number(dadosArquivo[1]);
            let modelo: string = dadosArquivo[2];
            let ano: number = Number(dadosArquivo[3]);
            let valorDeVenda: number = Number(dadosArquivo[4]);
            let potenciaDoMotor: string = dadosArquivo[5];
            let tipoDeCombustivel: string = dadosArquivo[6];
            let tipoDeCambio: string = dadosArquivo[7];
            let tipoDeDirecao: string = dadosArquivo[8];

            let novoVeiculo: Carro = new Carro(id,modelo,ano,valorDeVenda,potenciaDoMotor,tipoDeCombustivel,tipoDeCambio,tipoDeDirecao);
            concessionaria.inserir(novoVeiculo);
        } 
        
        if (tipo == 2) {
            let id: number = Number(dadosArquivo[1]);
            let modelo: string = dadosArquivo[2];
            let ano: number = Number(dadosArquivo[3]);
            let valorDeVenda: number = Number(dadosArquivo[4]);
            let cilindradas: number = Number(dadosArquivo[5]);

            let novoVeiculo: Moto = new Moto(id,modelo,ano,valorDeVenda,cilindradas);
            concessionaria.inserir(novoVeiculo);
        }
    }
}