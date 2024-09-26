import { inject, Injectable } from '@angular/core';
import { CreateRecurso, RecursoData, ResponseRecurso } from '../interfaces/recurso.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private BASE_URL = environment.apiUrl;
  private endpoint = this.BASE_URL + '/recursos';
  private httpClient = inject(HttpClient);

  private RECURSOS_DATA : RecursoData[] = [
    {
      id_uta: "UTA001",
      id_dici: "DICI001",
      id_categoria: 1,
      modelo: "HP ProBook 450",
      marca: "HP",
      estado_recurso: true,
      fecha_ingreso: new Date("2023-01-15"),
      descripcion: "Laptop HP ProBook 450 G7, 8GB RAM, 256GB SSD",
      ubicacion: "Laboratorio A"
    },
    {
      id_uta: "UTA002",
      id_dici: "DICI002",
      id_categoria: 2,
      modelo: "Canon EOS Rebel T7",
      marca: "Canon",
      estado_recurso: false,
      fecha_ingreso: new Date("2022-10-05"),
      descripcion: "Cámara Canon DSLR, 24.1 MP, con lente 18-55mm",
      ubicacion: "Sala de Fotografía"
    },
    {
      id_uta: "UTA003",
      id_dici: "DICI003",
      id_categoria: 3,
      modelo: "Dell XPS 13",
      marca: "Dell",
      estado_recurso: true,
      fecha_ingreso: new Date("2021-12-20"),
      descripcion: "Ultrabook Dell XPS 13, 16GB RAM, 512GB SSD",
      ubicacion: "Oficina B"
    }
  ]

  getAllRecursos(): Observable<RecursoData[]> {
    return this.httpClient.get<RecursoData[]>(`${this.BASE_URL}/recursos`)
  }

  getRecursoById(id_uta: string): Observable<RecursoData> {
    return this.httpClient.get<RecursoData>(`${this.BASE_URL}/recursos/${id_uta}`)
  }

  getRecursosByCategoria(id_categoria: number): Observable<RecursoData[]> {
    return this.httpClient.get<RecursoData[]>(`${this.BASE_URL}/categorias/${id_categoria}/recursos`)
  }
  
  crearRecurso(recurso: CreateRecurso): Observable<CreateRecurso> {
    return this.httpClient.post<RecursoData>(`${this.BASE_URL}/recursos`, recurso)
  }

  updateRecurso(id_uta : string , recurso: CreateRecurso): Observable<ResponseRecurso> {
    return this.httpClient.patch<ResponseRecurso>(`${this.BASE_URL}/recursos/${id_uta}`, recurso)
  }

  deleteRecurso(id_uta: string): Observable<ResponseRecurso> {
    return this.httpClient.delete<ResponseRecurso>(`${this.BASE_URL}/recursos/${id_uta}`)
  }
}
