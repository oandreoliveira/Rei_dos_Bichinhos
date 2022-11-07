import { Categoria } from "./Categoria";

export interface Produto {

    id: number;
    nome?: string;
    descricao?: string;
    valor?: number;
    promocao?: boolean;
    valorPromo?: number;
    imagem?: string;
    alturaCm?: number;
    larguraCm?: number;
    pesoGr?: number;
    isAtivo?: boolean;
    id_categoria?: number;
    // categoria?: Categoria;

}