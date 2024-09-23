import { PrestamoTipo } from "@prisma/client";

export class Prestamo {
    id_prestamo : number;
    fecha_ini : Date;
    fecha_fin : Date;
    hora_ini : Date;
    hora_fin : Date;
    prestamo_tipo : PrestamoTipo;
    estudiante_rut : string;
    recurso_icci_id : number;
    usuario_id : number;
}
