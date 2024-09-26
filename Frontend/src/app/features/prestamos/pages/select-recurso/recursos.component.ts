import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Recurso } from '../../../inventario/interfaces/recurso.interface';
import { MatButtonModule } from '@angular/material/button';
import { RecursosService } from '../../../inventario/services/recursos.service';
import { Categoria } from '../../../inventario/interfaces/categoria.interface';
import { CategoriasService } from '../../../inventario/services/categorias.service';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [MatGridListModule, MatIconModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export default class RecursosComponent implements OnInit {

 
  private activateRouter = inject(ActivatedRoute);
  private recursosService = inject(RecursosService);
  private categoriaService = inject(CategoriasService);
  private router = inject(Router);

  public categoria = signal<Categoria>({categoria_id: 0, nombre: '', fecha_creacion: new Date, icon: ''});
  public displayedColumns: string[] = ['icci_id', 'nombre', 'categoria', 'marca', 'modelo','color','actions'];
  public recursosList = signal<Recurso[]>([]);

  ngOnInit(): void {
    this.setCategory();
    this.setRecursosData();
  }

  setRecursosData(): void {
    const recursos = this.recursosService.getRecursosByCategoria(this.categoria().nombre);
    this.recursosList.set(recursos);
  }

  setCategory(): void {
    const categoria = this.activateRouter.snapshot.params['categoria'];
    this.categoria.set(this.categoriaService.getCategoryByName((categoria)));
  }

  onPrestar(recurso_id: number){
    this.router.navigate(['prestamos', this.categoria().nombre, recurso_id]);
    console.log('Prestar', recurso_id);
  }
}
