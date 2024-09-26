import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CategoriasService } from '../../../../services/categorias.service';
import { RecursosService } from '../../../../services/recursos.service';
import { CreateRecurso, RecursoData } from '../../../../interfaces/recurso.interface';
import { Categoria } from '../../../../interfaces/categoria.interface';

@Component({
  selector: 'app-crear-recurso-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormField, MatInputModule, MatDialogModule
    , MatSelectModule, MatGridListModule
  ],
  templateUrl: './crear-recurso-dialog.component.html',
  styleUrl: './crear-recurso-dialog.component.css'
})
export class CrearRecursoDialogComponent implements OnInit {

  private dialogRef = inject(MatDialogRef<CrearRecursoDialogComponent>);
  private formGroup = inject(FormBuilder);
  private recursoService = inject(RecursosService);
  private categoriaService = inject(CategoriasService);

  public formCrearRecurso = this.formGroup.group({
    id_dici: ['', Validators.required],
    id_uta: ['', Validators.required],
    id_categoria: ['',Validators.required],
    marca: ['',Validators.required],
    fecha_ingreso: [new Date()],
    ubicacion: ['',Validators.required],
    modelo: ['',Validators.required],
    descripcion: ['',Validators.required]
  })

  public categorias  = signal<Categoria[]>([]);

  ngOnInit(): void {
    this.setCategorias();
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

  setCategorias(){
    this.categoriaService.getAllCategorias().subscribe((res) => {
      console.log(res);
      this.categorias.set(res);
    });
  }

  crearRecurso(){

    if(this.formCrearRecurso.invalid){
      return;
    }

    const recurso : CreateRecurso = {
      id_uta: this.formCrearRecurso.get('id_uta')?.value!,
      id_dici: this.formCrearRecurso.get('id_dici')?.value!,
      id_categoria: +this.formCrearRecurso.get('id_categoria')?.value!,
      marca: this.formCrearRecurso.get('marca')?.value!,
      fecha_ingreso: this.formCrearRecurso.get('fecha_ingreso')?.value!,
      ubicacion: this.formCrearRecurso.get('ubicacion')?.value!,
      modelo: this.formCrearRecurso.get('modelo')?.value!,
      descripcion: this.formCrearRecurso.get('descripcion')?.value!
    };

    console.log(this.formCrearRecurso.get('id_categoria')?.value);

    this.recursoService.crearRecurso(recurso).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
      window.location.reload();
    });
    
  }
}
