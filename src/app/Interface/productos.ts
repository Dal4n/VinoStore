import { ICategoria } from "./categoria";

export interface IProductos {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenBase64: string;
    categoriaId: number;
    categoria: ICategoria;
} 