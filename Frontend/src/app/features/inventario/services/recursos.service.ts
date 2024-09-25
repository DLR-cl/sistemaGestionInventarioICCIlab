import { inject, Injectable } from '@angular/core';
import { Recurso } from '../interfaces/recurso.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  public BASE_URL = environment.apiUrl;

  private httpClient = inject(HttpClient);

  private RECURSOS_DATA : Recurso[] = [
    {
      recurso_id: 123456,
      icci_id: 123456,
      categoria: "Meta Quest",
      marca: "Meta",
      fecha_ingreso: new Date(),
      modelo: "Quest 2",
      estado: "Activo",
      descripcion: 'Un visor de realidad virtual'
    },
    {
      recurso_id: 123457,
      icci_id: 123457,
      categoria: "Monitores",
      marca: "Meta Quest",
      modelo: "Quest 1",
      fecha_ingreso: new Date(),
      estado: "Activo",
      descripcion: 'Un visor de realidad virtual'
    },
    {
      recurso_id: 123458,
      icci_id: 123458,
      categoria: "Computadores",
      marca: "Dell",
      modelo: "Inspiron 15",
      estado: "Activo",
      fecha_ingreso: new Date(),
      descripcion: 'Un computador portátil'
    }
  ]

  getRecursos(): Recurso[] {
    this.httpClient.get(`${this.BASE_URL}/recursos`)
    return this.RECURSOS_DATA
  }

  getRecursoById(recurso_id: number) {
    return this.RECURSOS_DATA.find(recurso => 
      recurso.recurso_id === recurso_id) || { recurso_id: 0, icci_id:0, fecha_ingreso: new Date(), categoria: '', marca: '', modelo: '', estado: '', descripcion: '' };
  }

  getRecursosByCategoria(categoria: string): Recurso[] {
    return this.RECURSOS_DATA.filter(recurso => 
      recurso.categoria === categoria) || [];
  }
}
