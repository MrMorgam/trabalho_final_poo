import { Concessionaria } from "./concessionaria";
import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";
import { AplicacaoError, ArquivoError } from "./execoes";
import prompt from "prompt-sync";


// Aplicação

const input = prompt();
let concessionaria: Concessionaria = new Concessionaria();
let opcao: string = '';

do {
    try{
    console.clear();
    console.log("########## APP CONCESSIONÁRIA ##########");
    console.log("\nEscolha uma opção: \n");
    console.log("1 - Cadastrar\n2 - Consultar \n3 - Alterar" +  
                "\n4 - Excluir\n5 - Dar baixa em estoque\n6 - Repor em estoque" +
                "\n7 - Listar Veículos\n8 - Carregar Arquivos de Veículos\n" +
                "\n\n0 - Sair e salvar\n");

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
            carregarArquivoDeTexto();
            break;
        case "0":
            break;
    }
    
    } catch (e: any){
        if(e instanceof AplicacaoError){
            console.log(e.message);
        } else {
            console.log("Erro inesperado. Contate o administrador do sistema.");
        }
    }

    console.log("")
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

    let id: number = Number(input("Número identificador: "));
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
    const id: number = Number(input('Id do veículo: '));
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
    let id: number = Number(input('Id do veículo: '));
    
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
    let id: number = Number(input('Id do veículo: '));
    concessionaria.excluir(id);
}


// Funções de estoque

function darBaixa(): void {
    console.log("DAR BAIXA EM ESTOQUE\n");
    let id: number = Number(input('Id do veículo: '));
    let quantidade: number = Number(input('Quantidade a dar baixa: '));
    concessionaria.darBaixa(quantidade, id);
}

function repor(): void {
    console.log("REPOR ESTOQUE\n");
    let id: number = Number(input('Id do veículo: '));
    let quantidade: number = Number(input('Quantidade a repor: '));
    concessionaria.repor(quantidade, id);
}


// Função para carregar lista de veículos em arquivo

function carregarArquivoDeTexto() {
    try {
        let LineReaderSync = require("line-reader-sync");
        let lrs = new LineReaderSync("./veiculos.txt");
        console.log("Inicializando leitura de Arquivo");
        while(true){
            let linha: string = lrs.readline();
            if(linha != null){
                let array: string[] = linha.split(",");
                let tipo: string = array[0];
                let id: number = parseFloat(array[1]);
                let modelo: string = array[2];
                let ano: number = parseFloat(array[3]);
                let valorDeVenda: number = parseFloat(array[4]);
                let quantidadeEmEstoque: number = parseFloat(array[5]);
                let veiculo!: Veiculo;
                if(tipo == 'V'){
                    veiculo = new Veiculo(id,modelo,ano,valorDeVenda);
                } else if (tipo == 'C') {
                    let potenciaDoMotor: string = array[6];
                    let tipoDeCombustivel: string = array[7];
                    let tipoDeCambio: string = array[8];
                    let tipoDeDirecao: string = array[9];
                    veiculo = new Carro(id,modelo,ano,valorDeVenda,potenciaDoMotor,tipoDeCombustivel,tipoDeCambio,tipoDeDirecao);
                } else if (tipo == 'M') {
                    let cilindradas: number = parseFloat(array[10]);
                    veiculo = new Moto(id,modelo,ano,valorDeVenda,cilindradas);
                }
                concessionaria.inserir(veiculo);
                console.log('Veículo lido: ' + veiculo.id);
            } else {
                console.log("Fim do Arquivo")
                break;
            }
        }
    } catch (e: any){
        throw new ArquivoError("Falha ao ler veículos de arquivo");
    }
}

// Demais funções

function listarVeiculos() {
    console.log(concessionaria.listarVeiculos());
}
