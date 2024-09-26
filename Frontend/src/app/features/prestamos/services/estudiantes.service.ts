import { inject, Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante.interface';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private BASE_URL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  getAllEstudiantes(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.BASE_URL}/estudiantes`);
  }

  getEstudianteByRut(rut: string): Observable<Estudiante> {
    return this.httpClient.get<Estudiante>(`${this.BASE_URL}/estudiantes/${rut}`);
  }
}
