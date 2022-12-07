class Concessionaria{
    private _veiculos: Veiculo[] = [];


    public inserir(veic: Veiculo): void{
        let veiculoProcurado = this.consultar(veic.id);

        if(veiculoProcurado == null){
            this._veiculos.push(veic);
        }
    }

    public consultar(id: number): Veiculo{
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

    public alterar(veic: Veiculo): void{
        let indice = this.consultarIndice(veic.id);

        if(indice != -1){
            this._veiculos[indice] = veic;
        }
        else{
            throw new Vazio("Veículo não está cadastrado");
        }
    }

   public excluir(id: number): void{
        let indice: number = this.consultarIndice(id);
        if(indice != -1){
            for(let i: number = 0; i<this._veiculos.length; i++){
                this._veiculos[i] = this._veiculos[i+1];
                
            }
            this._veiculos.pop();
        }
       else{
            throw new Vazio("Veículo não está cadastrado");
        }
    }

    public darBaixa(quantidade: number, id: number): void{
        let veiculoProcurado = this.consultar(id);

        if(veiculoProcurado != null){
            veiculoProcurado.darBaixa(quantidade);
        }
    }

    public repor(quantidade: number, id: number): void{
        let veiculoProcurado = this.consultar(id);

        if(veiculoProcurado != null){
            veiculoProcurado.repor(quantidade);
        }
    }
}
