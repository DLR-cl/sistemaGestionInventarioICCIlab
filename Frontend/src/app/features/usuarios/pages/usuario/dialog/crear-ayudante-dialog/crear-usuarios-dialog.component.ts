import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UsuarioService } from '../../../../services/usuario.service';
import { CrearCategoria } from '../../../../../inventario/interfaces/categoria.interface';
import { CreateUsuario } from '../../../../interfaces/usuario.interface';

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
  templateUrl: './crear-usuarios-dialog.component.html',
  styleUrl: './crear-usuarios-dialog.component.css'
})
export class CrearUsuariosDialogComponent {

  private formBuilder = inject(FormBuilder)
  private dialogRef = inject(MatDialogRef<CrearUsuariosDialogComponent>)

  public roles = Object.values(TiposUsuario)
  public usuarioService = inject(UsuarioService)

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

  crearUsuario(){
    if(this.formCrearAyudante.invalid){
      return
    }

    const usuario : CreateUsuario = {
      rut: this.formCrearAyudante.get('rut')?.value!,
      usuario: this.formCrearAyudante.get('usuario')?.value!,
      nombre: this.formCrearAyudante.get('nombre')?.value!,
      apellido: this.formCrearAyudante.get('apellido')?.value!,
      password: this.formCrearAyudante.get('password')?.value!,
      correo: this.formCrearAyudante.get('correo')?.value!,
      rol: this.formCrearAyudante.get('rol')?.value!,
    };

    this.usuarioService.createUsuario(usuario).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
      window.location.reload();
    })
  }
}
