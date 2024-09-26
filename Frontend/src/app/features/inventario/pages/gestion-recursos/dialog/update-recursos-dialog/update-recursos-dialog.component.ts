import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CategoriasService } from '../../../../services/categorias.service';
import { Categoria } from '../../../../interfaces/categoria.interface';
import { RecursosService } from '../../../../services/recursos.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateRecurso, RecursoData } from '../../../../interfaces/recurso.interface';

@Component({
  selector: 'app-update-recursos-dialog',
  standalone: true,
  imports: [MatGridListModule, MatDialogModule, MatInputModule, 
    MatFormFieldModule, MatSelectModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './update-recursos-dialog.component.html',
  styleUrl: './update-recursos-dialog.component.css'
})
export class UpdateRecursosDialogComponent implements OnInit {

  public data = inject(MAT_DIALOG_DATA)
  private categoriaService = inject(CategoriasService);
  private recursoService = inject(RecursosService);
  private formGroup = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<UpdateRecursosDialogComponent>);

  public categorySelect = signal<number>(0);
  public categorias = signal<Categoria[]>([]);

  public formUpdateRecurso = this.formGroup.group({
    id_dici: ['', Validators.required],
    id_uta: ['', Validators.required],
    id_categoria: [0,Validators.required],
    marca: ['',Validators.required],
    ubicacion: ['',Validators.required],
    modelo: ['',Validators.required],
    descripcion: ['',Validators.required]
  })

  ngOnInit(): void {
    this.setRecursoData();
    this.setCategorias();

  }

  setCategorias(){
    this.categoriaService.getAllCategorias().subscribe((res) => {
      this.categorias.set(res);
    });
  }

  setRecursoData(){
    this.recursoService.getRecursoById(this.data.id_uta).subscribe((res) => {
      this.formUpdateRecurso.patchValue({
        id_dici: res.id_dici,
        id_uta: res.id_uta,
        id_categoria: res.id_categoria,
        marca: res.marca,
        ubicacion: res.ubicacion,
        modelo: res.modelo,
        descripcion: res.descripcion
      });
    });
    
  }

  updateRecurso(){

    if(this.formUpdateRecurso.invalid){
      return;
    } 

    const updateRecurso: CreateRecurso = {
      id_dici: this.formUpdateRecurso.get('id_dici')?.value!,
      id_uta: this.formUpdateRecurso.get('id_uta')?.value!,
      id_categoria: +this.formUpdateRecurso.value.id_categoria!,
      marca: this.formUpdateRecurso.get('marca')?.value!,
      fecha_ingreso: new Date(),
      ubicacion: this.formUpdateRecurso.get('ubicacion')?.value!,
      modelo: this.formUpdateRecurso.get('modelo')?.value!,
      descripcion: this.formUpdateRecurso.get('descripcion')?.value!
    }

    this.recursoService.updateRecurso( this.data.id_uta, updateRecurso).subscribe((res) => {
      this.dialogRef.close();
      window.location.reload();
    });
  }

  cerrarDialog(){
    this.dialogRef.close();
  }
}
