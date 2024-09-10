import { Component, inject, OnInit, signal } from '@angular/core';
import { PrestamosService } from '../../prestamos.service';
import { Categorias } from '../../prestamos.interface';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements OnInit {

  private CATEGORIAS_DATA : Categorias[] = [ 
    {
      id: 1,
      nombre: "Meta Quest",
      descripcion: "descripcion 1"
    },
    {
      id: 2,
      nombre: "Computadores",
      descripcion: "descripcion 2"
    },
    {
      id: 3,
      nombre: "Monitores",
      descripcion: "descripcion 3"
    },
    {
      id: 4,
      nombre: "Teclados",
      descripcion: "descripcion 4"
    }
  ]

  public categorias = signal<Categorias[]>(this.CATEGORIAS_DATA);

  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  public isMobile = signal(false);

  ngOnInit(): void {
    this.breakpointUpdate();
  }

  private breakpointUpdate(){
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Large,
    ])
    .subscribe((result) => {
      if(result.breakpoints[Breakpoints.XSmall] ){
        console.log('MOBILE');
        this.isMobile.set(true);
      }
      else if(result.breakpoints[Breakpoints.Small]){
        console.log('Tablet');
        this.isMobile.set(true);

      }else if(result.breakpoints[Breakpoints.Large]){
        console.log('PC');
        this.isMobile.set(false);
      }
    });
  };

  onPrestar(categoria : string){

    const categoriaFormat = categoria.replace(/\s/g, '-').toLowerCase();
    this.router.navigate([`/prestamos/${categoria.toLocaleLowerCase()}`]);
  }
}
