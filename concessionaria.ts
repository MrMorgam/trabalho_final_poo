import { Veiculo } from "./veiculo";
import { VeiculoInexistenteException, Validacao, VeiculoJaCadastradoException } from "./execoes";

class Concessionaria {
    private _veiculos: Veiculo[] = [];

    public inserir(veiculo: Veiculo): void {
        let veiculoProcurado = this.consultarIndice(veiculo.id);

        if (veiculoProcurado != -1) {
            this._veiculos.push(veiculo);
        } else {
            throw new VeiculoJaCadastradoException("Veículo já cadastrado");
        }
    }

    public consultar(id: number): Veiculo {
        let veiculoProcurado!: Veiculo;

        for (let veiculo of this._veiculos) {
            if (veiculo.id == id) {
                veiculoProcurado = veiculo;
                break;
            }
        }

        return veiculoProcurado;
    }

    private consultarIndice(id: number): number {
        let indice: number = -1;

        for (let i: number = 0; i < this._veiculos.length; i++) {
            if (this._veiculos[i].id == id) {
                indice = i;
                break;
            }
        }

        if (indice != -1) {
            throw new VeiculoInexistenteException("Veículo não encontrado")
        }
        
        return indice;
    }

    public alterar(veiculo: Veiculo): void {
        let indice = this.consultarIndice(veiculo.id);

        this._veiculos[indice] = veiculo;
    }

   public excluir(id: number): void {
        let indice: number = this.consultarIndice(id);

        for(let i: number = indice; i < this._veiculos.length; i++){
            this._veiculos[i] = this._veiculos[i+1];
        }

        this._veiculos.pop();
    }

    public darBaixa(quantidade: number, id: number): void{
        let indice = this.consultarIndice(id);

        this._veiculos[indice].darBaixa(quantidade);
    }

    public repor(quantidade: number, id: number): void{
        let indice = this.consultarIndice(id);

    
        this._veiculos[indice].repor(quantidade);
        
    }
    
    public quantVeiculos(): number {
        return this._veiculos.length;
    }
    
    public totVeiculos(): number {
        let totVeiculos: number = 0;

        for(let veic of this._veiculos) {
            totVeiculos += veic.id;
        }

        return totVeiculos;
    }

    public mediaVeiculos(): number {
        return this.totVeiculos() / this.quantVeiculos();
    }
}

export { Concessionaria }