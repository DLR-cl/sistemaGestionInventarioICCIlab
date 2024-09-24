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
            path: 'prestamos/:categoria/:recurso', loadComponent: () => import('./features/prestamos/pages/gestion-prestamo/gestion-prestamo.component')
          },
          {
            path: 'prestamos/:categoria/:recurso/:estudiante', loadComponent: () => import('./features/prestamos/pages/confirmar-prestamo/confirmar-prestamo.component')
          },
          {
            path: 'inventario', loadComponent: () => import('./features/inventario/inventario.component'),
          },
          { 
            path: 'inventario/recursos', loadComponent: () => import('./features/inventario/pages/recursos/recursos.component') 
          },
          { 
            path: 'inventario/categorias', loadComponent: () => import('./features/inventario/pages/categorias/categorias.component') 
          },
          { 
            path: 'ayudantes', loadComponent: () => import('./features/ayudantes/pages/ayudantes/ayudantes.component') 
          },
          {
            path: 'advertencias', loadComponent: () => import('./features/inventario/inventario.component')
          },
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
