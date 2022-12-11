import { Veiculo } from "./veiculo";
import { VeiculoInexistenteException, VeiculoJaCadastradoException,
         NumeroInvalidoException, AnoInvalidoException, 
         valorDeVendaInvalidoException } from "./execoes";

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
            throw new NumeroInvalidoException("Formato de número inválido");
        }

        return id;
    }

    private validarAno(ano: number): number {
        if ((ano < 0 && ano < 2999) || ano % 1 != 0) {
            throw new AnoInvalidoException("Ano inválido");
        }

        return ano;
    }

    private validarValorDeVenda(valorDeVenda: number): number {
        if (valorDeVenda <= 0) {
            throw new valorDeVendaInvalidoException("Valor de venda inválido");
        }

        return valorDeVenda;
    }

    // Métodos de CRUD

    public inserir(veiculo: Veiculo): void {
        if (this.validarNumeroId(veiculo.id)) {
            let indiceVeiculoProcurado: number = this.consultarIndiceSemExcecao(veiculo.id);
            
            this.validarAno(veiculo.ano);
            this.validarValorDeVenda(veiculo.valorDeVenda);

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
        let indice = this.consultarIndice(id);

        this._veiculos[indice].darBaixa(quantidade);
    }

    public repor(quantidade: number, id: number): void {
        let indice = this.consultarIndice(id);

    
        this._veiculos[indice].repor(quantidade);
        
    }

    // Demais métodos
    
    public quantVeiculos(): number {
        return this._veiculos.length;
    }
    
    public totalVeiculos(): number {
        let totVeiculos: number = 0;

        for(let veiculo of this._veiculos) {
            totVeiculos += veiculo.id;
        }

        return totVeiculos;
    }

    public mediaVeiculos(): number {
        return this.totalVeiculos() / this.quantVeiculos();
    }
}

export { Concessionaria }