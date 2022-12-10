import { Concessionaria } from "./concessionaria";
import { Veiculo } from "./veiculo";
import prompt from "prompt-sync";


const input = prompt();
let concessionaria: Concessionaria = new Concessionaria();
let opcao: string = '';

do {
    console.log("\nEscolha uma opção: ");
    console.log("1 - Cadastrar \n2 - Consultar \n3 - Alterar" +  
                "\n4 - Excluir \n5 - Dar baixa \n6 - Repor " +
                "\n7 - Total_Veiculos \n8 - Media_Veículos" +
                "\n0 - Sair");

    opcao = input("Opção: ");

    switch(opcao) {
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

function inserir(): void{
    console.log("\nCadastrar Conta\n");
    let id: number = Number(input("Número identificador: "));
    let modelo: string = input("Modelo: ");
    let ano: number = Number(input("Ano: "));
    let valorDeVenda: number = Number(input("Valor de venda: "))

    let veiculo: Veiculo;
    veiculo = new Veiculo(id, modelo, ano, valorDeVenda);
    concessionaria.inserir(veiculo);
}

function consultar(): void{
    console.log("\nConsultar Veículo\n");
    let id: number = Number(input('Informe o id do veiculo: '));
    console.log(concessionaria.consultar(id));
}

function alterar(): void{
    console.log("\nAlterar Conta\n");
    let id: number = Number(input('Informe o id do veículo: '));
    let veiculo: Veiculo;
    veiculo = new Veiculo(id, '0', 0, 0);
    concessionaria.alterar(veiculo);
}

function excluir(): void{
    console.log("\nExcluir Conta\n")
    let id: number = Number(input('Informe o id do veículo: '));
    concessionaria.excluir(id);
}

function darBaixa(): void{
    let id: number = Number(input('Informe o id do veículo: '));
    let quantidade: number = Number(input('Quantidade: '));
    concessionaria.darBaixa(quantidade, id);
}

function repor(): void{
    let id: number = Number(input('Informe o id do veículo: '));
    let quantidade: number = Number(input('Quantidade: '));
    concessionaria.repor(quantidade, id);
}

function totVeiculos(): void{
    concessionaria.totVeiculos();
}

function mediaVeiculos(): void{
    concessionaria.mediaVeiculos();
}