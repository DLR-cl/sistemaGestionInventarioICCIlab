import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RecursosService } from '../../../../inventario/services/recursos.service';
import { CategoriasService } from '../../../../inventario/services/categorias.service';
import { Categoria } from '../../../../inventario/interfaces/categoria.interface';
import { RecursoData } from '../../../../inventario/interfaces/recurso.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfimarDevolucionDialogComponent } from '../confimar-devolucion-dialog/confimar-devolucion-dialog.component';

@Component({
  selector: 'app-select-recurso',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './select-recurso.component.html',
  styleUrl: './select-recurso.component.css'
})
export default class SelectRecursoComponent {

  private activateRouter = inject(ActivatedRoute);
  private recursosService = inject(RecursosService);
  private categoriaService = inject(CategoriasService);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  public categoria = signal<Categoria | null>(null);
  public displayedColumns: string[] = [
    'id_uta',
    'id_dici',
    'id_categoria',
    'modelo',
    'marca',
    'ubicacion',
    'descripcion',
    'actions'
  ];
  public recursosData = signal<RecursoData[]>([]);

  ngOnInit(): void {
    this.setCategory();
    this.setAllRecursosByCategory();
  }

  setAllRecursosByCategory(): void {
    const id_categoria = +this.activateRouter.snapshot.params['categoria'];
    this.recursosService.getRecursosByCategoria(id_categoria).subscribe((res) => {
      const recursosDisponibles = res.filter((recurso) => recurso.estado_recurso === false);
      this.recursosData.set(recursosDisponibles);
    });
  }

  setCategory(): void {
    const categoria = +this.activateRouter.snapshot.params['categoria'];
    this.categoriaService.getCategoryById(categoria).subscribe((res) => {
      this.categoria.set(res);
    });
  }

  onDevolver(id_uta: number){
    this.dialog.open(ConfimarDevolucionDialogComponent, {
      data: { id_uta },
      width: '400px',
      height: '300px'
    });
  }
}
