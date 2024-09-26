export interface Categoria {
  id_categoria: number;
  nombre_categoria: string;
  fecha_creacion: Date;
}

export interface CrearCategoria {
  nombre_categoria: string;
  fecha_creacion: Date;
}

export interface ResponseCategoria {
  statusCode: number;
  message: string;
  data?: Categoria[]; 
}