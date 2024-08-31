import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavAyudantesComponent } from './layout/sidenav-ayudantes/sidenav-ayudantes/sidenav-ayudantes.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    SidenavAyudantesComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent{

  public collapsed = signal(true);

  public breakpointObserver = inject(BreakpointObserver);

  public isMobile = signal(false);

  public modeSideNav = computed(() => {
    if (this.isMobile()) {
      return 'over';
    }else {
      return 'side';
    }
  })

  public modeDark = computed(() => {
    if (this.isMobile()) {
      return 'in-light-theme';
    }else {
      return 'in-dark-theme';
    }
  })

  public toolbarWidth = computed(() => {
    if (this.isMobile()) {
      return '0rem';
    }else {
      return '13rem';
    }
  });

  constructor(){
    this.bkObserver();
  }

  bkObserver(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile.set(true);
      }
      if (result.breakpoints[Breakpoints.Small] 
        || result.breakpoints[Breakpoints.Medium]
        || result.breakpoints[Breakpoints.Large]
        || result.breakpoints[Breakpoints.XLarge]
      ) {
        this.isMobile.set(false);
      }
    });
  }
}
