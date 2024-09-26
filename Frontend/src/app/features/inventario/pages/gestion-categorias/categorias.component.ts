import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interfaces/categoria.interface';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CrearCategoriaDialogComponent } from './dialog/crear-categoria-dialog/crear-categoria-dialog.component';
import { DeleteCategoriaDialogComponent } from './dialog/delete-categoria-dialog/delete-categoria-dialog.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [DatePipe,MatTableModule,MatButtonModule,MatIconModule, MatCardModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export default class CategoriasComponent implements OnInit {

  private categoriasService = inject(CategoriasService)
  public categoriasData = signal<Categoria[]>([])
  private dialog = inject(MatDialog)

  public displayedColumns = ['id_categoria', 'nombre_categoria', 'fecha_creacion','actions']

  ngOnInit(): void {
    this.setCategoriasData()
  }

  setCategoriasData(){

    this.categoriasService.getAllCategorias().subscribe((res) => {
      console.log(res)
      this.categoriasData.set(res)
    })
  }

  crearCategoria(){
    this.dialog.open(CrearCategoriaDialogComponent,{
      height: '400px',
      width: '600px'
    })
  }

  openDialogDeleteCategoria(id_categoria: number){
    this.dialog.open(DeleteCategoriaDialogComponent,{
      data: {id_categoria: id_categoria},
      height: '300px',
      width: '400px'
    })
  }
}
