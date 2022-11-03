import { Categoria } from "./Categoria";

export interface Produto {

    id: number;
    nome: string;
    valor: number;
    promocao: boolean;
    valorPromo: number;
    imagem: string;
    alturaCm: number;
    larguraCm: number;
    pesoGr: number;
    isAtivo: boolean;
    categorias: Categoria;

}