import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-crear-recurso-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormField, MatInputModule, MatDialogModule],
  templateUrl: './crear-recurso-dialog.component.html',
  styleUrl: './crear-recurso-dialog.component.css'
})
export class CrearRecursoDialogComponent {

  private dialogRef = inject(MatDialogRef<CrearRecursoDialogComponent>);
  private formGroup = inject(FormBuilder);

  public formCrearRecurso = this.formGroup.group({
    recurso_id: [''],
    fecha_ingreso: [''],
    categoria: [''],
    marca: [''],
    modelo: [''],
    estado: [''],
    descripcion: ['']
  })

  cerrarDialog(){
    this.dialogRef.close();
  }

}
