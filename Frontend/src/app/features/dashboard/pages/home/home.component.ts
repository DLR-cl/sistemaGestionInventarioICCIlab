import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  
  public breakpointObserver = inject(BreakpointObserver);

  public isMobile = signal(false);

  public ncols = computed(() => {
    if (this.isMobile()) {
      return 1;
    } else {
      return 3;
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
        this.isMobile.set(true);
      }
      else if( result.breakpoints[Breakpoints.Large]){
        console.log('PC');
        this.isMobile.set(false);
      }
      else if( result.breakpoints[Breakpoints.Small]){
        console.log('Tablet');
        this.isMobile.set(true);
      }
    });
  };
}
