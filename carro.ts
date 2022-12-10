import { Veiculo } from "./veiculo";
import { Tributavel } from "./interfaces";

class Carro extends Veiculo implements Tributavel {
    private _potenciaDoMotor: string;
    private _tipoDeCombustivel: string;
    private _tipoDeCambio: string;
    private _tipoDeDirecao: string;

    constructor(
        id: number,
        modelo: string,
        ano: number,
        valorDeVenda: number,
        potenciaDoMotor: string,
        tipoDeCombustivel: string,
        tipoDeCambio: string,
        tipoDeDirecao: string
        ) 
    {
        super(id, modelo, ano, valorDeVenda);

        this._potenciaDoMotor = potenciaDoMotor;
        this._tipoDeCombustivel = tipoDeCombustivel;
        this._tipoDeCambio = tipoDeCambio;
        this._tipoDeDirecao = tipoDeDirecao;
    }

    // Métodos de leitura

    get potenciaDoMotor(): string {
        return this._potenciaDoMotor;
    }

    get tipoDeCombustivel(): string {
        return this._tipoDeCombustivel;
    }

    get tipoDeCambio(): string {
        return this._tipoDeCambio;
    }

    get tipoDeDirecao(): string {
        return this._tipoDeDirecao;
    }

    // Método de cálculo de impostos

    public calcularIPVA(valorVenal: number): number {
        return valorVenal * 0.025;
    }
}

export { Carro }