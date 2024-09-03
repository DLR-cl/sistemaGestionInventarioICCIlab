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
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgOptimizedImage,
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
export default class DashboardComponent implements OnInit {


  public breakpointObserver = inject(BreakpointObserver);

  public collapsed = signal(false);
  public isMobile = signal(false);

  public profilePicture = computed(() => {
    return this.collapsed() ? '30px' : '100px';
  });

  public sideNavWidth = computed(() => {
    if (this.isMobile()) {
      if(this.collapsed()){
        return '0';
      }else{
        return '12rem';
      }
    }else {
      if(this.collapsed() ){
        return '3.75rem';
      }else{
        return '14rem';
      }
    }
  });

  public modeSideNav = computed(() => {
    if (this.isMobile()) {
      if(this.collapsed()){
        return 'side';
      }else{
        return 'over';
      }
    }else {
      return 'side'
    }
  })

  public contentWidth = computed(() => {
    if (this.isMobile()) {
      return '0';
    }else {
      if(this.collapsed()){
        return '3.75rem';
      }else{
        return '14rem';
      }
    }
  });

  ngOnInit(): void {
    this.breakpointUpdate();
  }

  breakpointUpdate(){
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Large,
    ])
    .subscribe((result) => {
      if(result.breakpoints[Breakpoints.XSmall] ){
        console.log('MOBILE');
        this.collapsed.set(true);
        this.isMobile.set(true);
      }
      else if( result.breakpoints[Breakpoints.Large]){
        console.log('PC');
        this.collapsed.set(false);
        this.isMobile.set(false);
      }
      else if( result.breakpoints[Breakpoints.Small]){
        console.log('Tablet');
        this.collapsed.set(true);
        this.isMobile.set(true);
      }
    });
  };
}
