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
            path: 'prestamos', loadComponent: () => import('./features/prestamos/pages/select-category/inicio.component'),
          },
          {
            path: 'prestamos/:categoria', loadComponent: () => import('./features/prestamos/pages/select-recurso/recursos.component')
          },
          {
            path: 'prestamos/:categoria/:recurso', loadComponent: () => import('./features/prestamos/pages/scan-qr/gestion-prestamo.component')
          },
          {
            path: 'prestamos/:categoria/:recurso/:estudiante', loadComponent: () => import('./features/prestamos/pages/confirmar-prestamo/confirmar-prestamo.component')
          },
          { 
            path: 'inventario/recursos', loadComponent: () => import('./features/inventario/pages/gestion-recursos/recursos.component') 
          },
          { 
            path: 'inventario/categorias', loadComponent: () => import('./features/inventario/pages/gestion-categorias/categorias.component') 
          },
          { 
            path: 'ayudantes', loadComponent: () => import('./features/ayudantes/pages/ayudantes/ayudantes.component') 
          }
        ],
      },
    ]
  },{ path: '**', redirectTo: '' }
];
