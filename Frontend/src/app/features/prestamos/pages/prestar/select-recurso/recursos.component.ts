import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { RecursoData } from '../../../../inventario/interfaces/recurso.interface';
import { MatButtonModule } from '@angular/material/button';
import { RecursosService } from '../../../../inventario/services/recursos.service';
import { Categoria } from '../../../../inventario/interfaces/categoria.interface';
import { CategoriasService } from '../../../../inventario/services/categorias.service';

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
      const recursosDisponibles = res.filter((recurso) => recurso.estado_recurso === true);
      this.recursosData.set(recursosDisponibles);
    });
  }

  setCategory(): void {
    const categoria = +this.activateRouter.snapshot.params['categoria'];
    this.categoriaService.getCategoryById(categoria).subscribe((res) => {
      this.categoria.set(res);
    });
  }

  onPrestar(id_uta: number){
    this.router.navigate(['prestamos', this.categoria()?.id_categoria, 'prestar',id_uta]);
  }
}
