import { Injectable } from '@angular/core';
import { Recurso } from '../interfaces/recurso.interface';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private RECURSOS_DATA : Recurso[] = [
    {
      icci_id: 123456,
      nombre: "Meta Quest 2",
      categoria: "Meta Quest",
      marca: "Meta Quest",
      modelo: "Quest 2",
      color: "Blanco",
      estado: "Activo"
    },
    {
      icci_id: 123457,
      nombre: "Meta Quest 1",
      categoria: "Monitores",
      marca: "Meta Quest",
      modelo: "Quest 1",
      color: "Blanco",
      estado: "Activo"
    },
    {
      icci_id: 123458,
      nombre: "Dell Inspiron 15",
      categoria: "Computadores",
      marca: "Dell",
      modelo: "Inspiron 15",
      color: "blanco",
      estado: "Activo"
    }
  ]

  getRecursos(): Recurso[] {
    return this.RECURSOS_DATA
  }

  getRecursoById(icci_id: number) {
    return this.RECURSOS_DATA.find(recurso => 
      recurso.icci_id === icci_id) || { icci_id: 0, nombre: '', categoria: '', marca: '', modelo: '', color: '', estado: '' };
  }

  getRecursosByCategoria(categoria: string): Recurso[] {
    return this.RECURSOS_DATA.filter(recurso => 
      recurso.categoria === categoria) || [];
  }
}
