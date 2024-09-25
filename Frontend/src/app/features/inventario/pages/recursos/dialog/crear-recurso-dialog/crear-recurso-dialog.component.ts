import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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

  public formCrearRecurso = this.formGroup.group({
    recurso_id: ['', Validators.required],
    icci_id: ['', Validators.required],
    fecha_ingreso: ['',Validators.required],
    categoria: ['',Validators.required],
    marca: ['',Validators.required],
    modelo: ['',Validators.required],
    estado: ['',Validators.required],
    descripcion: ['',Validators.required]
  })

  cerrarDialog(){
    this.dialogRef.close();
  }

}
