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
            path: 'prestamos/seguimiento', loadComponent: () => import('./features/prestamos/pages/seguimiento/seguimiento.component'),
          },
          {
            path: 'prestamos', loadComponent: () => import('./features/prestamos/pages/select-category/inicio.component'),
          },
          {
            path: 'prestamos/prestar/:categoria', loadComponent: () => import('./features/prestamos/pages/prestar/select-recurso/recursos.component')
          },
          {
            path: 'prestamos/:categoria/prestar/:recurso', loadComponent: () => import('./features/prestamos/pages/prestar/scan-qr/gestion-prestamo.component')
          },
          {
            path: 'prestamos/:categoria/prestar/:recurso/:estudiante', loadComponent: () => import('./features/prestamos/pages/prestar/confirmar-prestamo/confirmar-prestamo.component')
          },
          // {
          //   path: 'prestamos/:categoria/devolver',
          // },
          { 
            path: 'inventario/recursos', loadComponent: () => import('./features/inventario/pages/gestion-recursos/recursos.component') 
          },
          { 
            path: 'inventario/categorias', loadComponent: () => import('./features/inventario/pages/gestion-categorias/categorias.component') 
          },
          { 
            path: 'usuarios', loadComponent: () => import('./features/usuarios/pages/usuario/usuarios.component') 
          }
        ],
      },
    ]
  },{ path: '**', redirectTo: '' }
];
