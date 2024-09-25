import { Component, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Recurso } from '../../../inventario/interfaces/recurso.interface';
import { RecursosService } from '../../../inventario/services/recursos.service';
import { MatCardModule } from '@angular/material/card';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule, ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject, delay, filter, of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gestion-prestamo',
  standalone: true,
  imports: [MatCardModule, NgxScannerQrcodeModule, MatButtonModule],
  templateUrl: './gestion-prestamo.component.html',
  styleUrls: ['./gestion-prestamo.component.css']
})
export default class GestionPrestamoComponent implements OnInit, OnDestroy {

  private routerActive = inject(ActivatedRoute);
  private router = inject(Router);
  public recursoService = inject(RecursosService)

  @ViewChild('action') scanner!: NgxScannerQrcodeComponent;

  public scannerData = new BehaviorSubject<ScannerQRCodeResult[]>([]);
  public hasCameraPermission = false; 
  public isPermissionChecked = false; 

  public recurso = signal<Recurso>({ recurso_id: 0, fecha_ingreso: new Date(), categoria: '', marca: '', modelo: '', estado: '', descripcion: '' });

  public config: ScannerQRCodeConfig = {
    isBeep: false,
    constraints: {
      video: {
        height: 576,
        width: 1024,
        frameRate: { ideal: 60 }
      },
      audio: false,
    }
  };

  ngOnInit(): void {
    this.checkCameraAccess();
    
    this.setRecursoById();
    if(this.recurso().recurso_id === 0){
      this.router.navigate(['/**']);
    }
  }

  ngOnDestroy(): void {
    if(this.scanner.isStart){
      this.scanner.stop();
    }
  }

  onScanData(event: ScannerQRCodeResult[]) {
    this.scannerData.next(event);
    this.scannerData.subscribe(data => {
      if (data.length > 0) {

        this.scanner.stop();
        const scannedValue = data[0].value;
        const categoria = this.routerActive.snapshot.params['categoria'];
        const recurso = this.routerActive.snapshot.params['recurso'];
        const estudiante = scannedValue; 
        
        this.router.navigate([`/prestamos/${categoria}/${recurso}/${estudiante}`]);
      }
    });
  }

  checkCameraAccess() {
    navigator.mediaDevices.getUserMedia({ video: true }).then(() => {

      this.hasCameraPermission = true;

      if (this.scanner && this.scanner.isStart === false) {
        this.scanner.start();
      }
    }).catch((error) => {
      console.error('Error al verificar permisos de cámara:', error);
      this.hasCameraPermission = false;
    }).finally(() => {
      this.isPermissionChecked = true;
    });
  }

  setRecursoById(): void {
    const recurso = +(this.routerActive.snapshot.params['recurso']);
    this.recurso.set(this.recursoService.getRecursoById(recurso));
  }
}
