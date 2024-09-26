import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RecursosService } from '../../../../services/recursos.service';

@Component({
  selector: 'app-delete-recurso-dialog',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule],
  templateUrl: './delete-recurso-dialog.component.html',
  styleUrl: './delete-recurso-dialog.component.css'
})
export class DeleteRecursoDialogComponent {

  private dialogRef = inject(MatDialogRef<DeleteRecursoDialogComponent>);
  public data = inject(MAT_DIALOG_DATA);
  private recursoService = inject(RecursosService);
  
  cerrarDialog(){
    this.dialogRef.close();
  }

  borrarRecurso(){

    this.recursoService.deleteRecurso(this.data.id_uta).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    });
  }
}
