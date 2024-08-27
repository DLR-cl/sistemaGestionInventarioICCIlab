import { Routes } from '@angular/router';

export enum RoutesEnum {
  ADMIN = '',
  LOGIN ='login'
}

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./features/dashboard/dashboard.component'), 
    canActivate : [],//Guard Logeo
    children: [
      {
        path: '', 
        children: [
          {
            path: '', loadComponent: () => import('./features/dashboard/pages/home/home.component')
          }
        ],
      },
      {
        path: '', canActivate : [],//Guard Admin
        children: [
          {
            path: 'superadmin1', loadComponent: () => import('./features/dashboard/dashboard.component')
          }
        ],
      },
    ]
  },
  {
    path: 'login', loadComponent: () => import('./features/dashboard/dashboard.component')
  },
  {
    path: 'register', loadComponent: () => import('./features/dashboard/dashboard.component')
  }
  
];
