import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavAdminComponent } from '../sidenav/sidenav-admin/sidenav-admin.component';
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
    SidenavAdminComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent implements OnInit{
 

  public breakpointObserver = inject(BreakpointObserver);

  public isMobile = signal(false);


  ngOnInit(): void {
    this.breakpointUpdate();  
  }

  private breakpointUpdate(){
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .subscribe((result) => {
      if(result.breakpoints[Breakpoints.XSmall] ){
        console.log('MOBILE');
        this.isMobile.set(true);
      }
      else if(result.breakpoints[Breakpoints.Small]){
        console.log('Tablet');
        this.isMobile.set(true);
      }else if(result.breakpoints[Breakpoints.Medium]){
        console.log('Medium');
        this.isMobile.set(true);
      } else if(result.breakpoints[Breakpoints.Large]){
        console.log('PC');
        this.isMobile.set(false);
      }
      else if(result.breakpoints[Breakpoints.XLarge]){
        console.log('Extra Large');
        this.isMobile.set(false);
      }
    });
  };
}
