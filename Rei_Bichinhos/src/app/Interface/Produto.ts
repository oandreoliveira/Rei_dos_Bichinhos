import { Categoria } from "./Categoria";

export interface Produto {

    id: number;
    nome?: string;
    quantidade: number;
    codigo?: string;
    modelo?: string;
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


}