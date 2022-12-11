import { Veiculo } from "./veiculo";
import { Tributavel } from "./interfaces";
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
            throw new VeiculoInexistenteException("Erro: veículo não encontrado");
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
            throw new NumeroInvalidoException("Erro: ID inválido");
        }

        return id;
    }

    private validarAno(ano: number): void {
        if (ano < 1 || ano > 2999 || ano % 1 != 0) {
            throw new AnoInvalidoException("Erro: ano inválido");
        }
    }

    private validarValorDeVenda(valorDeVenda: number): void {
        if (valorDeVenda <= 0) {
            throw new ValorDeVendaInvalidoException("Erro: valor de venda inválido");
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
                throw new VeiculoJaCadastradoException("Erro: veículo já cadastrado");
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

    public darBaixa(quantidade: number, id: number): void {
        if (this.consultar(id).quantidadeEmEstoque - quantidade < 0) {
            throw new NaoPossuiEstoqueException("Erro: o veículo não possui estoque suficiente para realizar a operação");
        }

        if (quantidade < 0 || quantidade % 1 != 0) {
            throw new QuantidadeInvalidaException("Erro: quantidade inválida")
        }

        let indice = this.consultarIndice(id);

        this._veiculos[indice].darBaixa(quantidade);
    }

    public repor(quantidade: number, id: number): void {
        if (quantidade < 0 || quantidade % 1 != 0) {
            throw new QuantidadeInvalidaException("Erro: quantidade inválida")
        }
        
        let indice = this.consultarIndice(id);
    
        this._veiculos[indice].repor(quantidade);
    }
     
    public listarVeiculos(): string {
        let listaVeiculos: string = "";

        for (let i: number = 0; i < this._veiculos.length; i++) {
            listaVeiculos = listaVeiculos + 
            "ID: " + this._veiculos[i].id +
            " | Modelo: " + this._veiculos[i].modelo +
            " | Ano: " + this._veiculos[i].ano +
            " | Valor de venda: " + this._veiculos[i].valorDeVenda +
            " | Quantidade em estoque: " + this._veiculos[i].quantidadeEmEstoque + "\n";
        }
        
        return listaVeiculos;
    }

    // Método de cálculo de impostos

    public calcularIPVA(id: number): number {
        let indice: number = this.consultarIndice(id);

        let veiculo: Veiculo = this._veiculos[indice];

        return (<Tributavel><unknown>veiculo).calcularIPVA(veiculo.valorDeVenda);
    }
}

export { Concessionaria }
