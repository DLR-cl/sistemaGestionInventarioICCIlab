import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private CATEGORIAS_DATA : Categoria[] = [ 
    {
      categoria_id: 1,
      nombre: "Meta Quest",
      icon: '3d_rotation',
      fecha_creacion: new Date()
    },
    {
      categoria_id: 2,
      nombre: "Computadores",
      icon: "laptop",
      fecha_creacion: new Date()
    },
    {
      categoria_id: 3,
      nombre: "Monitores",
      icon: "desktop_windows",
      fecha_creacion: new Date()
    },
    {
      categoria_id: 4,
      nombre: "Teclados",
      icon: "keyboard",
      fecha_creacion: new Date()
    }
  ]

  getCategorias() : Categoria[] {
    return this.CATEGORIAS_DATA
  }

  getCategoryByName(nombre: string) : Categoria {
    return this.CATEGORIAS_DATA.find(categoria => 
      categoria.nombre === nombre) || { categoria_id: 0, nombre: '', icon: '', fecha_creacion: new Date() } 
  } 
}
