import { Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private ESTUDIANTES_DATA: Estudiante[] = [
    { rut: 11, nombre: 'Eduardo', apellido: 'Perez', carrera: 'Ingenieria en Sistemas' },
    { rut: 22, nombre: 'Maria', apellido: 'Gonzalez', carrera: 'Ingenieria en Sistemas' },
    { rut: 33, nombre: 'Pedro', apellido: 'Rodriguez', carrera: 'Ingenieria en Sistemas' },
    { rut: 44, nombre: 'Ana', apellido: 'Garcia', carrera: 'Ingenieria en Sistemas' },
    { rut: 55, nombre: 'Carlos', apellido: 'Martinez', carrera: 'Ingenieria en Sistemas' },
  ]

  getEstudiantes(): Estudiante[] {
    return this.ESTUDIANTES_DATA;
  }

  getEstudianteById(rut: number): Estudiante {
    return this.ESTUDIANTES_DATA.find(estudiante => estudiante.rut === rut) || { rut: 0, nombre: '', apellido: '', carrera: '' };
  }
}
