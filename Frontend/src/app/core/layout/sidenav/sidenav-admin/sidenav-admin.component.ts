import { Component, input, output, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';


interface MenuItem {
  icon: string;
  route?: string;
  name: string;
  subitems?: MenuItem[];
}

@Component({
  selector: 'app-sidenav-admin',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav-admin.component.html',
  styleUrl: './sidenav-admin.component.css',
  animations: [
    trigger('expandMenu', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('150ms ease-in-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-in-out', style({ height: '0px', opacity: 0 })),
      ])
    ])
  ]
})
export class SidenavAdminComponent {

  public isMobile = input<boolean>();

  public toogleSidenav = output<void>();

  public clickItem = signal<{name: string, display:boolean}>({name:'',display:false});

  public menuItems : MenuItem[] = [ 
    { icon: 'dashboard', route:'', name: 'Inicio'}, 
    { icon: 'cached', route: '/prestamos', name: 'Prestamos',},
    { icon: 'inventory', name: 'Inventario', 
      subitems: [
        { icon: 'computer', route: 'inventario/recursos', name: 'Recursos'},
        { icon: 'category', route: 'inventario/categorias', name: 'Categorias'},
        { icon: 'schedule', route: 'inventario/historial', name: 'Historial'},
      ]
    },
    { icon: 'report', route: '/advertencias', name: 'Advertencias',},
    { icon: 'supervisor_account', route: '/ayudantes', name: 'Ayudantes',},
  ]

  onLinkClick(name: string): void {
    console.log('click', name); 
    if(this.clickItem().name === name){
      this.clickItem.set({name: name, display: !this.clickItem().display});
      console.log(this.clickItem());
    }
    else{
      this.clickItem.set({name: name, display: true});
      console.log(this.clickItem());
    }

    // if(this.isMobile()){
    //   this.toogleSidenav.emit();
    // }
  }
}
