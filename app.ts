import { Concessionaria } from "./concessionaria";
import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";
import prompt from "prompt-sync";


// Aplicação

const input = prompt();
let concessionaria: Concessionaria = new Concessionaria();
let opcao: string = '';

do {
    console.clear();
    console.log("########## APP CONCESSIONÁRIA ##########");
    console.log("\nEscolha uma opção: \n");
    console.log("1 - Cadastrar \n2 - Consultar \n3 - Alterar" +  
                "\n4 - Excluir \n5 - Dar baixa \n6 - Repor " +
                "\n7 - Total_Veiculos \n8 - Media_Veiculos" +
                "\n\n0 - Sair\n");

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
            totalVeiculos();
            break;
        case "8":
            console.clear();
            mediaVeiculos();
            break;
        case "0":
            break;
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
    let opcaoVeiculo: number = Number(input(">> "));
    console.log("");
    
    let id: number = Number(input("Número identificador: "));
    let modelo: string = input("Modelo: ");
    let ano: number = Number(input("Ano: "));
    let valorDeVenda: number = Number(input("Valor de venda: "));

    if (opcaoVeiculo == 1) {
        let potenciaDoMotor: string = input("Potência do motor: ");
        let tipoDeCombustivel: string = input("Tipo de combustível: ");
        let tipoDeCambio: string = input("Tipo de câmbio: ");
        let tipoDeDirecao: string = input("Tipo de direção: ");


        let veiculo: Carro = new Carro(id, modelo, ano, valorDeVenda, 
                                       potenciaDoMotor, tipoDeCombustivel, 
                                       tipoDeCambio, tipoDeDirecao);

        concessionaria.inserir(veiculo);
    }

    if (opcaoVeiculo == 2) {
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
    console.log(`Quantidade em estoque: ${veiculo.quantidadeEmEstoque}`);

    if (veiculo instanceof Carro) {
        console.log(`Potência do motor: ${veiculo.potenciaDoMotor}`);
        console.log(`Tipo de combustível: ${veiculo.tipoDeCombustivel}`);
        console.log(`Tipo de câmbio: ${veiculo.tipoDeCambio}`);
        console.log(`Tipo de direção: ${veiculo.tipoDeDirecao}`);
    }

    if (veiculo instanceof Moto) {
        console.log(`Cilindradas: ${veiculo.cilindradas}`);
    }
}

function alterar(): void{
    console.log("ALTERAR CADASTRO DE VEÍCULO\n");
    let id: number = Number(input('Id do veículo: '));
    let veiculo: Veiculo;

    veiculo = new Veiculo(id, '0', 0, 0);
    concessionaria.alterar(veiculo);
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


// Demais funções

function totalVeiculos(): void {
    console.log(concessionaria.totalVeiculos());
}

function mediaVeiculos(): void {
    console.log(concessionaria.mediaVeiculos());
}