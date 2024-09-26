import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-delete-usuario-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './delete-usuario-dialog.component.html',
  styleUrl: './delete-usuario-dialog.component.css'
})
export class DeleteUsuarioDialogComponent {

  private dialogRef = inject(MatDialogRef<DeleteUsuarioDialogComponent>)
  public data = inject(MAT_DIALOG_DATA);
  private usuarioService = inject(UsuarioService)
  
  cerrarDialog(){
    this.dialogRef.close()
  }
  borrarUsuario(){
    console.log(this.data.id_usuario)
    this.usuarioService.deleteUsuario(this.data.id_usuario).subscribe((res) => {
      console.log(res);
      this.cerrarDialog();
    })
  }
}
