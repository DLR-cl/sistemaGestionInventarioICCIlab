export interface CreatePrestamo {
  id_uta : string;
}

export interface PrestamoData {
  id_prestamo :number;                
  fecha_inicio: Date;
  fecha_fin: Date;
  id_uta: Date;
}

export interface ResponsePrestamo {
  statusCode: number;
  message: string;
  data: string;  
}
