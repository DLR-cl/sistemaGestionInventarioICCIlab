import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CategoriasService } from '../../../../services/categorias.service';
import { CrearCategoria } from '../../../../interfaces/categoria.interface';

@Component({
  selector: 'app-crear-categoria-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, MatGridListModule, MatFormFieldModule, 
    ReactiveFormsModule, MatFormField, MatInputModule],
  templateUrl: './crear-categoria-dialog.component.html',
  styleUrl: './crear-categoria-dialog.component.css'
})
export class CrearCategoriaDialogComponent {

  private formBuilder = inject(FormBuilder)
  private dialogRef = inject(MatDialogRef<CrearCategoriaDialogComponent>)
  private categoriaService = inject(CategoriasService)

  public formCrearCategoria = this.formBuilder.group({
    nombre_categoria: ['', Validators.required],
    fecha_creacion: [new Date()]
  })

  cerrarDialog(){
    this.dialogRef.close()
  }

  crearCategoria(){

    if(this.formCrearCategoria.invalid){
      return
    }

    const categoria : CrearCategoria ={
      nombre_categoria: this.formCrearCategoria.get('nombre_categoria')?.value!,
      fecha_creacion: this.formCrearCategoria.get('fecha_creacion')?.value!
    }

    this.categoriaService.createCategoria(categoria).subscribe((res) => {
      console.log(res)
      this.dialogRef.close()
      window.location.reload()
    })
  }
}
