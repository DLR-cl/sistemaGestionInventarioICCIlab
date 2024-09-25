import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CategoriasService } from '../../../../services/categorias.service';

@Component({
  selector: 'app-crear-recurso-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormField, MatInputModule, MatDialogModule
    , MatSelectModule, MatGridListModule
  ],
  templateUrl: './crear-recurso-dialog.component.html',
  styleUrl: './crear-recurso-dialog.component.css'
})
export class CrearRecursoDialogComponent {

  private dialogRef = inject(MatDialogRef<CrearRecursoDialogComponent>);
  private formGroup = inject(FormBuilder);
  private categoraService = inject(CategoriasService);

  public formCrearRecurso = this.formGroup.group({
    id_dici: ['', Validators.required],
    id_uta: ['', Validators.required],
    categoria: ['',Validators.required],
    marca: ['',Validators.required],
    fecha_ingreso: [new Date()],
    ubicacion: ['',Validators.required],
    modelo: ['',Validators.required],
    descripcion: ['',Validators.required]
  })

  cerrarDialog(){
    this.dialogRef.close();
  }

  crearRecurso(){

    if(this.formCrearRecurso.invalid){
      return;
    }

    const { categoria, ...recurso } = this.formCrearRecurso.value;
    this.dialogRef.close();
    console.log(recurso);
    
  }
}
