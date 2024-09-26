import { inject, Injectable } from '@angular/core';
import { Categoria, CrearCategoria, ResponseCategoria } from '../interfaces/categoria.interface';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private BASE_URL = environment.apiUrl;
  private httpClient = inject(HttpClient);
  private CATEGORIAS_DATA : Categoria[] = [ 
    {
      id_categoria: 1,
      nombre_categoria: "Meta Quest",
      fecha_creacion: new Date()
    },
    {
      id_categoria: 2,
      nombre_categoria: "Computadores",
      fecha_creacion: new Date()
    },
    {
      id_categoria: 3,
      nombre_categoria: "Monitores",
      fecha_creacion: new Date()
    },
    {
      id_categoria: 4,
      nombre_categoria: "Teclados",
      fecha_creacion: new Date()
    }
  ]

  getAllCategorias() : Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.BASE_URL}/categorias`)
  }

  getCategoryById(id_categoria: number) : Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.BASE_URL}/categorias/${id_categoria}`)  
  }

  createCategoria(categoria: CrearCategoria) : Observable<ResponseCategoria> {
    return this.httpClient.post<ResponseCategoria>(`${this.BASE_URL}/categorias`, categoria)
  }

  deleteCategoria(id_categoria: number) : Observable<ResponseCategoria> {
    return this.httpClient.delete<ResponseCategoria>(`${this.BASE_URL}/categorias/${id_categoria}`)
  }
}
