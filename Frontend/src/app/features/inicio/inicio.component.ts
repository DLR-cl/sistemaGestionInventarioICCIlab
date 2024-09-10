import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LOAD_WASM, NgxScannerQrcodeComponent, NgxScannerQrcodeModule, ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';

LOAD_WASM().subscribe();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, NgxScannerQrcodeModule],
  templateUrl: './incio.component.html',
  styleUrl: './incio.component.css'
})
export default class HomeComponent implements OnInit {
  
  public breakpointObserver = inject(BreakpointObserver);

  @ViewChild('action') scanner!: NgxScannerQrcodeComponent;

  public scannerData = new BehaviorSubject<ScannerQRCodeResult[]>([]);
  public isMobile = signal(false);

  ngOnInit(): void {
    this.scannerData.subscribe(data => {
      console.log(data.length);
      if (data.length > 0) {
        console.log('QR Code detected:', data[0].value);
        this.scanner.stop();
      }
    });
    this.breakpointUpdate();  
  }

  public config: ScannerQRCodeConfig = {
    isBeep:false,
    constraints: {
      video: {
        height: 720,
        width: 1280,
      }
    }
  }

  onScanData(event: ScannerQRCodeResult[]) {
    this.scannerData.next(event);
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
