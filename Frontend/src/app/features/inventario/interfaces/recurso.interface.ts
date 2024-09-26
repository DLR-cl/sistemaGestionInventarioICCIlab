
export interface RecursoData {
  id_uta: string;
  id_dici: string;
  id_categoria: number;
  modelo: string;
  marca: string;
  estado_recurso: boolean;
  fecha_ingreso: Date;
  ubicacion: string ;
  descripcion: string;
}


export interface CreateRecurso {
  id_uta: string;
  id_dici: string;
  id_categoria: number;
  modelo: string;
  marca: string;
  fecha_ingreso: Date;
  ubicacion: string ;
  descripcion: string;
}

export interface ResponseRecurso {
  statusCode: number;
  message: string;
  data: RecursoData[];  
}
