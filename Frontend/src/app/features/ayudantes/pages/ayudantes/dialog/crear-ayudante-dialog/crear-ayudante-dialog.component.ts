import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { Ayudante } from '../../../../interfaces/ayudantes.interface';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

enum TiposUsuario {
  administrador = 'Administrador',
  ayudante = 'Ayudante',
}

@Component({
  selector: 'app-crear-ayudante-dialog',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatGridListModule, FormsModule, ReactiveFormsModule,MatFormField, MatInputModule,
    MatButtonModule, MatSelectModule
  ],
  templateUrl: './crear-ayudante-dialog.component.html',
  styleUrl: './crear-ayudante-dialog.component.css'
})
export class CrearAyudanteDialogComponent {

  private formBuilder = inject(FormBuilder)
  private dialogRef = inject(MatDialogRef<CrearAyudanteDialogComponent>)

  public roles = Object.values(TiposUsuario)

  public formCrearAyudante = this.formBuilder.group({
    rut: ['',Validators.required],
    usuario: ['',Validators.required],
    nombre: ['', Validators.required],
    apellido: ['',Validators.required],
    password: ['',Validators.required],
    correo: ['',Validators.required],
    rol: ['',Validators.required],
  })


  closeDialog(){
    this.dialogRef.close() 
  }

  crearAyudante(){
    if(this.formCrearAyudante.invalid){
      return
    }

    const ayudante = {
      rut: this.formCrearAyudante.get('rut')?.value ,
      usuario: this.formCrearAyudante.get('usuario')?.value ,
      nombre: this.formCrearAyudante.get('nombre')?.value ,
      apellido: this.formCrearAyudante.get('apellido')?.value ,
      password: this.formCrearAyudante.get('password')?.value ,
      correo: this.formCrearAyudante.get('correo')?.value ,
      rol: this.formCrearAyudante.get('rol')?.value,
    };
    console.log(ayudante)
  }
}
