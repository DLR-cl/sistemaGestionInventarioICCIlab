import { Component, input, output, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

interface MenuItem {
  icon: string;
  route?: string;
  name: string;
  subitems?: MenuItem[];
}


@Component({
  selector: 'app-sidenav-ayudantes',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav-ayudantes.component.html',
  styleUrl: './sidenav-ayudantes.component.css'
})
export class SidenavAyudantesComponent {

  public isMobile = input<boolean>();

  public toogleSidenav = output<void>();

  public clickItem = signal<{name: string,display:boolean}>({name:'',display:false});

  public menuItems : MenuItem[] = [ 
    { icon: 'dashboard', route:'', name: 'Inicio', 
      subitems: [
        { icon: 'add', route: 'add', name: 'Crear'},
      ]}, 
    { icon: 'cached', route: '/gestion', name: 'Gestion'},
    { icon: 'inventory', route: '/inventario', name: 'Inventario',},
    { icon: 'report', route: '/advertencias', name: 'Advertencias',},
    { icon: 'supervisor_account', route: '/ayudantes', name: 'Ayudantes',},
  ]
  onLinkClick(name: string): void {
    this.clickItem.set({name: name, display: !this.clickItem().display});
    if(this.isMobile()){
      this.toogleSidenav.emit();
    }
  }

  
}
