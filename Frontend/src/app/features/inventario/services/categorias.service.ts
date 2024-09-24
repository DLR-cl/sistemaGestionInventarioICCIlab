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
      icon: '3d_rotation'
    },
    {
      categoria_id: 2,
      nombre: "Computadores",
      icon: "laptop"
    },
    {
      categoria_id: 3,
      nombre: "Monitores",
      icon: "desktop_windows"
    },
    {
      categoria_id: 4,
      nombre: "Teclados",
      icon: "keyboard"
    }
  ]

  getCategorias() : Categoria[] {
    return this.CATEGORIAS_DATA
  }

  getCategoryByName(nombre: string) : Categoria {
    return this.CATEGORIAS_DATA.find(categoria => 
      categoria.nombre === nombre) || { categoria_id: 0, nombre: '', icon: '' }
  } 
}
