import { Injectable } from '@angular/core';
import { Categorias } from './prestamos.interface';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private CATEGORIAS_DATA : Categorias[] = [ 
    {
    id: 1,
    nombre: "MetaQuest",
    descripcion: "descripcion 1"
  },
  {
    id: 2,
    nombre: "Computadores",
    descripcion: "descripcion 2"
  },
  {
    id: 1,
    nombre: "Monitores",
    descripcion: "descripcion 3"
  },

  ]

  
  getCategory(): Categorias[] {
    return this.CATEGORIAS_DATA;
  }

  getCategoryById(id: number): Categorias {
    return this.CATEGORIAS_DATA.find((categoria) => categoria.id === id) as Categorias;
  }
  
}
