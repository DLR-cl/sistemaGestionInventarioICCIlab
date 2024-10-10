import { prestamo } from "@prisma/client";

export class RecursoEntity {

    nombre: string;
    marca?: string;
    descripcion?: string;
    fecha_ingreso?: Date;
    modelo: string;
    estado_recurso: boolean;
    id_categoria: number;
    id_dici: string;
    id_uta?: string;
    ubicacion?: string;

}
