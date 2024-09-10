import { Routes } from '@angular/router';

export enum RoutesEnum {
  ADMIN = '',
  LOGIN ='login'
}

export const routes: Routes = [
  {
    path: 'login', loadComponent: () => import('./core/auth/pages/login/login.component')
  },
  {
    path: '', loadComponent: () => import('./core/layout/dashboard/dashboard.component'), 
    canActivate : [],//Guard Logeo
    children: [
      {
        path: '', 
        canActivate : [],//Guard Ayudante
        children: [
          {
            path: '', loadComponent: () => import('./features/inicio/inicio.component')
          },
          
          {
            path: 'prestamos', loadComponent: () => import('./features/prestamos/pages/inicio/inicio.component'),
          },
          {
            path: 'prestamos/:categoria', loadComponent: () => import('./features/prestamos/pages/recursos/recursos.component')
          },
          {
            path: 'inventario', loadComponent: () => import('./features/inventario/inventario.component'),
            children: [
            ]
          },
          {
            path: 'advertencias', loadComponent: () => import('./features/inventario/inventario.component')
          }
        ],
      },
      {
        path: '', canActivate : [],//Guard Admin
        children: [
          {
            path: 'ayudantes', loadComponent: () => import('./features/inventario/inventario.component')
          }
        ],
      },
    ]
  },{ path: '**', redirectTo: '' }
];
