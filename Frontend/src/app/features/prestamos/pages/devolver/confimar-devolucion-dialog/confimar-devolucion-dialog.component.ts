import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PrestamosService } from '../../../services/prestamos.service';

@Component({
  selector: 'app-confimar-devolucion-dialog',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './confimar-devolucion-dialog.component.html',
  styleUrl: './confimar-devolucion-dialog.component.css'
})
export class ConfimarDevolucionDialogComponent implements OnInit {

  public data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<ConfimarDevolucionDialogComponent>);
  private presamosService = inject(PrestamosService);
  

  ngOnInit(): void {
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

  ///ARREGLAR ESTO....
  devolverRecurso(){
    this.presamosService.getAllPrestamos().subscribe((res) => {
      const recurso = res.find((res: any) => res.id_uta === this.data.id_uta);
      if(recurso){
        const idPrestmao = res[0].id_prestamo
        console.log(res[0].id_prestamo);
        this.presamosService.finalizarPrestamo(idPrestmao).subscribe((res) => {
          console.log(res);
          window.location.reload();
        });
      }
    });
  }
}
