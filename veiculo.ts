class Veiculo {
    // Atributos

    private _id: number;
    private _modelo: string;
    private _ano: number;
    private _valorDeVenda: number;
    private _quantidadeEmEstoque: number;

    // Construtor

    constructor(
        id: number, 
        modelo: string,
        ano: number, 
        valorDeVenda: number,
        quantidadeEmEstoque: number
        ) 
    {
        this._id = id;
        this._modelo = modelo;
        this._ano = ano;
        this._valorDeVenda = valorDeVenda;
        this._quantidadeEmEstoque = quantidadeEmEstoque;
    }

    // Métodos de leitura

    get id(): number {
        return this._id;
    }

    get modelo(): string {
        return this._modelo;
    }

    get ano(): number {
        return this._ano;
    }

    get valorDeVenda(): number {
        return this._valorDeVenda;
    }

    get quantidadeEmEstoque(): number {
        return this._quantidadeEmEstoque;
    }

    // Métodos de venda

    public calcularValorMinimoDeEntrada(): number {
        return this.valorDeVenda * 0.1;
    }

    public calcularParcelaDoFinanciamento(
        quantidadeDeParcelas: number,
        taxaDeJuros: number,
        valorDeEntrada: number = this.calcularValorMinimoDeEntrada()): number
    {
        const valorFinanciado = this._valorDeVenda - valorDeEntrada;

        return valorFinanciado / quantidadeDeParcelas * taxaDeJuros;
    }


    // Métodos de gerenciamento de estoque

    public darBaixa(quantidade: number): void {
        this._quantidadeEmEstoque -= quantidade;
    }

    public repor(quantidade: number): void {
        this._quantidadeEmEstoque += quantidade;
    }
}