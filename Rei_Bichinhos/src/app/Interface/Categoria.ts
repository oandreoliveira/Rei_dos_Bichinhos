import { Produto } from "./Produto";

export interface Categoria {

    id: number;
    nome?: string;
    isAtivo?: boolean;
    produtos?: Produto[];
}