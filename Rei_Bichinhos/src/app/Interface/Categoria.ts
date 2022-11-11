import { Produto } from "./Produto";

export interface Categoria {

    id: number;
    nome?: string;
    imagem?: string;
    isAtivo?: boolean;
    produtos?: Produto[];
}