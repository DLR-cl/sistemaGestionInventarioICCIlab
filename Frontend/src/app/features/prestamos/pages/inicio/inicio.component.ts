import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CategoriasService } from '../../../inventario/services/categorias.service';
import { Categoria } from '../../../inventario/interfaces/categoria.interface';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements OnInit {

  public categorias = signal<Categoria[]>([]);
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  public isMobile = signal(false);

  public categoriasService = inject(CategoriasService);

  ngOnInit(): void {
    this.breakpointUpdate();
    this.categorias.set(this.categoriasService.getCategorias());
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

  onPrestar(categoria : string){
    this.router.navigate([`/prestamos/${categoria}`]);
  }

 
}
