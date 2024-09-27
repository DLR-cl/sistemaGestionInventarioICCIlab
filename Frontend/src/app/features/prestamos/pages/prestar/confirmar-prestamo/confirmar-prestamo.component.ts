import { Component, inject, OnInit, signal } from '@angular/core';
import { Estudiante } from '../../../interfaces/estudiante.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../../../services/estudiantes.service';
import { RecursoData } from '../../../../inventario/interfaces/recurso.interface';
import { RecursosService } from '../../../../inventario/services/recursos.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PrestamosService } from '../../../services/prestamos.service';
import { RegularService } from '../../../services/regular.service';

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
  private prestamosService = inject(PrestamosService);
  private regular = inject(RegularService);

  public estudiante = signal<Estudiante | null>(null);
  public recurso = signal<RecursoData | null>(null);
  public isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.breakpointUpdate();
    this.setEstudianteById();
    this.setRecursoById();
  }

  setEstudianteById() {
    const rut = (this.activeRouter.snapshot.params['estudiante']);
    this.estudiantesService.getEstudianteByRut(rut).subscribe((res) => {
      this.estudiante.set(res);
      if(!this.estudiante()){
        this.router.navigate(['/**']);
      }
    });
  }

  setRecursoById() {
    const recurso = this.activeRouter.snapshot.params['recurso'];
    this.recursoSerice.getRecursoById(recurso).subscribe((res) => {
      console.log(res);
      this.recurso.set(res);
    });
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
        this.isMobile.set(true);
      }
      else if(result.breakpoints[Breakpoints.Small]){
        this.isMobile.set(true);

      }else if(result.breakpoints[Breakpoints.Medium]){
        this.isMobile.set(true);
        
      }else if(result.breakpoints[Breakpoints.Large]){
        this.isMobile.set(false);
      }
      else if(result.breakpoints[Breakpoints.XLarge]){
        this.isMobile.set(false);
      }
    });
  };

  onConfirmarPrestamo(): void {
    const recurso = this.recurso();
    if (recurso) {
      console.log(recurso.id_uta);
      this.prestamosService.realizarPrestamo(recurso.id_uta).subscribe((res) => {
        this.router.navigate(['/prestamos'])
      });
    } else {
      console.error('Recurso no disponible');
    }
  }
  

  onCancelarPrestamo(){
    this.router.navigate(['/prestamos'])
  }

}
