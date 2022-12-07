class Concessionaria{
    private _veiculos: Veiculo[] = [];


    inserir(veic: Veiculo): void{
        let veiculoProcurado = this.consultar(veic.id);

        if(veiculoProcurado == null){
            this._veiculos.push(veic);
        }
    }

    consultar(id: number): Veiculo{
        let veiculoProcurado!: Veiculo;
        for(let veic of this._veiculos){
            if(veic.id == id){
                veiculoProcurado = veic;
                break;
            }
        }
        return veiculoProcurado;
    }

    private consultarIndice(id: number): number{
        let indice: number = -1;

        for(let i: number = 0; i<this._veiculos.length; i++){
            if(this._veiculos[i].id == id){
                indice = i;
                break;
            }
        }
        return indice;
    }

    alterar(veic: Veiculo): void{
        let indice = this.consultarIndice(veic.id);

        if(indice != -1){
            this._veiculos[indice] = veic;
        }
    }

    excluir(id: number): void{
        let indice: number = this.consultarIndice(id);
        if(indice != -1){
            for(let i: number = 0; i<this._veiculos.length; i++){
                this._veiculos[i] = this._veiculos[i+1];
                
            }
            this._veiculos.pop();
        }
    }

    darBaixa(quantidade: number, id: number): void{
        let veiculoProcurado = this.consultar(id);

        if(veiculoProcurado != null){
            veiculoProcurado.darBaixa(quantidade);
        }
    }

    repor(quantidade: number, id: number): void{
        let veiculoProcurado = this.consultar(id);

        if(veiculoProcurado != null){
            veiculoProcurado.repor(quantidade);
        }
    }
}
