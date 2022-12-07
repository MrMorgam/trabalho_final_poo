/* não consegui importar */


let input = prompt();
let concessionaria: Concessionaria = new Concessionaria();
let opcao: String = '';

do{
    console.log('\nEscolha uma opção: ');
    console.log('1 - Cadastrar 2 - Consultar 3 - Alterar'+  
    '4 - excluir 5 - Dar baixa 6 - Repor '+
    '7 - Total_Veiculos 8 - Media_Veículos' +
     '0 - Sair ');

     opcao = prompt() as string;
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
     prompt("Operação finalizada. Pressione <enter> ");

} while (opcao != "0");
console.log("Aplicação Encerrada");

function inserir(): void{
    console.log("\nCadastrar Conta\n");
    let id: number = Number(prompt('Informe o id: '));
    let veiculo: Veiculo;
    veiculo = new Veiculo(id, '0', 0, 0);
    concessionaria.inserir(veiculo);
}

function consultar(): void{
    console.log("\nConsultar Veículo\n");
    let id: number = Number(prompt('Informe o id do veiculo: '));
    console.log(concessionaria.consultar(id));
}

function alterar(): void{
    console.log("\nAlterar Conta\n");
    let id: number = Number(prompt('Informe o id do veículo: '));
    let veiculo: Veiculo;
    veiculo = new Veiculo(id, '0', 0, 0);
    concessionaria.alterar(veiculo);
}

function excluir(): void{
    console.log("\nExcluir Conta\n")
    let id: number = Number(prompt('Informe o id do veículo: '));
    concessionaria.excluir(id);
}

function darBaixa(): void{
    let id: number = Number(prompt('Informe o id do veículo: '));
    let quantidade: number = Number(prompt('Quantidade: '));
    concessionaria.darBaixa(quantidade, id);
}

function repor(): void{
    let id: number = Number(prompt('Informe o id do veículo: '));
    let quantidade: number = Number(prompt('Quantidade: '));
    concessionaria.repor(quantidade, id);
}

function totVeiculos(): void{
    concessionaria.totVeiculos();
}

function mediaVeiculos(): void{
    concessionaria.mediaVeiculos();
}
