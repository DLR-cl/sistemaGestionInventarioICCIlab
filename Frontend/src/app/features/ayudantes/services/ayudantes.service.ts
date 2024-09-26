import { Injectable } from '@angular/core';
import { Ayudante } from '../interfaces/ayudantes.interface';

@Injectable({
  providedIn: 'root'
})
export class AyudantesService {

  private ayudantesData : Ayudante[] = [
    {
      id_usuario: 1,
      rut: "12345678-9",
      nombre: "Carlos",
      apellido: "González",
      usuario: "cgonzalez",
      correo: "cgonzalez@example.com",
    },
    {
      id_usuario: 2,
      rut: "98765432-1",
      nombre: "Ana",
      apellido: "Pérez",
      usuario: "aperez",
      correo: "aperez@example.com",
    },
    {
      id_usuario: 3,
      rut: "19283746-0",
      nombre: "Luis",
      apellido: "Martínez",
      usuario: "lmartinez",
      correo: "lmartinez@example.com",
    },
    {
      id_usuario: 4,
      rut: "10293847-5",
      nombre: "María",
      apellido: "Fernández",
      usuario: "mfernandez",
      correo: "mfernandez@example.com",
    },
    {
      id_usuario: 5,
      rut: "56473829-8",
      nombre: "Jorge",
      apellido: "Ramírez",
      usuario: "jramirez",
      correo: "jramirez@example.com",
    }
  ]

  constructor() { }

  public getEstudiantesData() : Ayudante[] {
    return this.ayudantesData
  }
}
