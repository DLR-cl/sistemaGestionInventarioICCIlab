import { Component, inject, OnInit, signal } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../../services/estudiantes.service';
import { Categoria } from '../../../inventario/interfaces/categoria.interface';
import { CategoriasService } from '../../../inventario/services/categorias.service';
import { Recurso } from '../../../inventario/interfaces/recurso.interface';
import { RecursosService } from '../../../inventario/services/recursos.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmar-prestamo',
  standalone: true,
  imports: [MatGridListModule,MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './confirmar-prestamo.component.html',
  styleUrl: './confirmar-prestamo.component.css'
})
export default class ConfirmarPrestamoComponent implements OnInit {

  private activeRouter = inject(ActivatedRoute);
  private estudiantesService = inject(EstudiantesService);
  private recursoSerice = inject(RecursosService)
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);


  public estudiante = signal<Estudiante>({ rut: 0, nombre: '', apellido: '', carrera: '' });
  public recurso = signal<Recurso>({ recurso_id: 0, icci_id:0, fecha_ingreso: new Date(), categoria: '', marca: '', modelo: '', estado: '', descripcion: '' });
  public isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.breakpointUpdate();
    this.setEstudianteById();
    this.setRecursoById();
    console.log(this.recurso().recurso_id);
    if(this.estudiante().rut === 0 || this.recurso().recurso_id === 0){
      
      this.router.navigate(['/**']);
    }
  }

  setEstudianteById(): void {
    const rut = +(this.activeRouter.snapshot.params['estudiante']);
    this.estudiante.set(this.estudiantesService.getEstudianteById(rut))
  }

  setRecursoById(): void {
    const recurso = +(this.activeRouter.snapshot.params['recurso']);
    this.recurso.set(this.recursoSerice.getRecursoById(recurso));
  }

  private breakpointUpdate(){
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .subscribe((result) => {
      if(result.breakpoints[Breakpoints.XSmall] ){
        console.log('MOBILE');
        this.isMobile.set(true);
      }
      else if(result.breakpoints[Breakpoints.Small]){
        console.log('Tablet');
        this.isMobile.set(true);

      }else if(result.breakpoints[Breakpoints.Medium]){
        console.log('Tablet');
        this.isMobile.set(true);
        
      }else if(result.breakpoints[Breakpoints.Large]){
        console.log('PC');
        this.isMobile.set(false);
      }
      else if(result.breakpoints[Breakpoints.XLarge]){
        console.log('PC');
        this.isMobile.set(false);
      }
    });
  };

}
