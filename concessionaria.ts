import { Veiculo } from "./veiculo";
import { VeiculoInexistenteException, VeiculoJaCadastradoException,
         NumeroInvalidoException, AnoInvalidoException, 
         ValorDeVendaInvalidoException, NaoPossuiEstoqueException,
         QuantidadeInvalidaException } from "./execoes";

class Concessionaria {
    private _veiculos: Veiculo[] = [];

    // Método para consultar índice

    private consultarIndice(id: number): number {
        let indice: number = -1;

        for (let i: number = 0; i < this._veiculos.length; i++) {
            if (this._veiculos[i].id == id) {
                indice = i;
                break;
            }
        }

        if (indice == -1) {
            throw new VeiculoInexistenteException("Veículo não encontrado");
        }
        
        return indice;
    }


    private consultarIndiceSemExcecao(id: number) {
        let indice: number = -1;

        for (let i: number = 0; i < this._veiculos.length; i++) {
            if (this._veiculos[i].id == id) {
                indice = i;
                break;
            }
        }
        
        return indice;
    }

    // Métodos de validação

    private validarNumeroId(id: number): number {
        if (typeof id != "number" || isNaN(id) || id <= 0 || id % 1 != 0) {
            throw new NumeroInvalidoException("Número identificador inválido");
        }

        return id;
    }

    private validarAno(ano: number): void {
        if (ano < 1 || ano > 2999 || ano % 1 != 0) {
            throw new AnoInvalidoException("Ano inválido");
        }
    }

    private validarValorDeVenda(valorDeVenda: number): void {
        if (valorDeVenda <= 0) {
            throw new ValorDeVendaInvalidoException("Valor de venda inválido");
        }
    }

    // Métodos de CRUD

    public inserir(veiculo: Veiculo): void {
        if (this.validarNumeroId(veiculo.id)) {
            this.validarAno(veiculo.ano);
            this.validarValorDeVenda(veiculo.valorDeVenda);

            let indiceVeiculoProcurado: number = this.consultarIndiceSemExcecao(veiculo.id);

            if (indiceVeiculoProcurado == -1) {
                this._veiculos.push(veiculo);
            } else {
                throw new VeiculoJaCadastradoException("Veículo já cadastrado");
            }
        }
        
    }

    public consultar(id: number): Veiculo {
        let indice: number = this.consultarIndice(id);

        return this._veiculos[indice];
    }

    public alterar(veiculo: Veiculo): void {
        let indice = this.consultarIndice(veiculo.id);

        this.validarAno(veiculo.ano);
        this.validarValorDeVenda(veiculo.valorDeVenda);

        this._veiculos[indice] = veiculo;
    }

   public excluir(id: number): void {
        let indice: number = this.consultarIndice(id);

        for (let i: number = indice; i < this._veiculos.length; i++) {
            this._veiculos[i] = this._veiculos[i+1];
        }

        this._veiculos.pop();
    }

    // Métodos de estoque

    private possuiEstoque(id: number): boolean {
        let veiculo: Veiculo = this.consultar(id);

        return veiculo.quantidadeEmEstoque != 0;
    }

    public darBaixa(quantidade: number, id: number): void {
        if (!this.possuiEstoque(id)) {
            throw new NaoPossuiEstoqueException("O veículo não possui estoque");
        }

        if (quantidade < 0 || quantidade % 1 != 0) {
            throw new QuantidadeInvalidaException("Quantidade inválida")
        }

        let indice = this.consultarIndice(id);

        this._veiculos[indice].darBaixa(quantidade);
    }

    public repor(quantidade: number, id: number): void {
        if (quantidade < 0 || quantidade % 1 != 0) {
            throw new QuantidadeInvalidaException("Quantidade inválida")
        }
        
        let indice = this.consultarIndice(id);
    
        this._veiculos[indice].repor(quantidade);
    }

    // Demais métodos
    
    public CalcularQuantidadeVeiculos(): number {
        return this._veiculos.length;
    }
     
    public listaVeiculos(): string{
         let listaVeiculos = '';
         for(let i: number = 0; i<this._veiculos.length; i++){
            listaVeiculos = listaVeiculos + 
            ' Id: ' + this._veiculos[i].id +
            ' - Modelo: ' + this._veiculos[i].modelo +
            ' - Ano: ' + this._veiculos[i].ano +
            ' - Valor de Venda: ' + this._veiculos[i].valorDeVenda +
            ' - Quantidade em Estoque: ' + this._veiculos[i].quantidadeEmEstoque + '\n';
        }
        return listaVeiculos;
    }
}

export { Concessionaria }