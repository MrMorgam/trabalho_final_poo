import { Veiculo } from "./veiculo";
import { Tributavel } from "./interfaces";

class Moto extends Veiculo implements Tributavel {
    private _cilindradas: number;
    
    constructor(
        id: number,
        modelo: string,
        ano: number,
        valorDeVenda: number,
        cilindradas: number
        ) 
    {
        super(id, modelo, ano, valorDeVenda);

        this._cilindradas = cilindradas;
    }

    // Método de cálculo de impostos

    public calcularIPVA(valorVenal: number): number {
        return valorVenal * 0.02;
    }
}