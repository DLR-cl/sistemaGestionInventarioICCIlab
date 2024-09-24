import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,MatIconModule, MatCardModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export default class CategoriasComponent implements OnInit {

  private categoriasService = inject(CategoriasService)

  public categoriasData = signal<Categoria[]>([])

  public displayedColumns = ['categoria_id', 'nombre', 'icon','actions']

  ngOnInit(): void {
    this.setCategoriasData()
  }

  setCategoriasData(){

    const categorias = this.categoriasService.getCategorias()

    this.categoriasData.set(categorias)

  }

}
