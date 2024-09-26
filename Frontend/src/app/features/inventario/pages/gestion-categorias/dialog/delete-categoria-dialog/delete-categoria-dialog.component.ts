import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CategoriasService } from '../../../../services/categorias.service';

@Component({
  selector: 'app-delete-categoria-dialog',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-categoria-dialog.component.html',
  styleUrl: './delete-categoria-dialog.component.css'
})
export class DeleteCategoriaDialogComponent {

  private dialogRef = inject(MatDialogRef<DeleteCategoriaDialogComponent>);
  private categoriaService = inject(CategoriasService);
  public data = inject(MAT_DIALOG_DATA);

  cerrarDialog(){
    this.dialogRef.close();
  }

  borrarCategoria(){
    this.categoriaService.deleteCategoria(this.data.id_categoria).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    });
  }
}
