import { Categoria } from "./Categoria";

export interface Produto {

    id: number;
    nome: string;
    valor: string;
    promocao: boolean;
    valorPromo: string;
    imagem: string;
    alturaCm: string;
    larguraCm: string;
    pesoGr: string;
    isAtivo: boolean;
    categorias: Categoria;

}