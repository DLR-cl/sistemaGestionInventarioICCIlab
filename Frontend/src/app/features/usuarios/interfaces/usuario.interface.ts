export interface CreateUsuario {
  rut: string,
  password: string,
  nombre: string,
  apellido: string,
  usuario: string,
  correo: string,
  rol: string
}

export interface Usuario {
  id_usuario: number;       // El ID es un entero y no opcional
  nombre: string;          // El nombre puede ser opcional
  usuario: string;         // El nombre de usuario es opcional
  apellido: string;        // El apellido es opcional
  correo: string;          // El correo es opcional
  password: string;        // La contraseña es opcional
  rut: string;             // El RUT es opcional
}
export interface ResponseUsuario {
  statusCode: number;
  message: string;
  data?: Usuario[];  
}