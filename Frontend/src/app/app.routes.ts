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
    path: 'register', loadComponent: () => import('./features/dashboard/dashboard.component')
  },
  {
    path: '', loadComponent: () => import('./features/dashboard/dashboard.component'), 
    canActivate : [],//Guard Logeo
    children: [
      {
        path: '', 
        canActivate : [],//Guard Ayudante
        children: [
          {
            path: '', loadComponent: () => import('./features/dashboard/pages/home/home.component')
          },
          
          {
            path: 'gestion', loadComponent: () => import('./features/gestion/gestion.component')
          },
          {
            path: 'inventario', loadComponent: () => import('./features/inventario/inventario.component')
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
  }
];
