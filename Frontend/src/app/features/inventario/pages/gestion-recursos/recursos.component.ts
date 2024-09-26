import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RecursoData } from '../../interfaces/recurso.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecursosService } from '../../services/recursos.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CrearRecursoDialogComponent } from './dialog/crear-recurso-dialog/crear-recurso-dialog.component';
import { DeleteRecursoDialogComponent } from './dialog/delete-recurso-dialog/delete-recurso-dialog.component';
import { UpdateRecursosDialogComponent } from './dialog/update-recursos-dialog/update-recursos-dialog.component';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [DatePipe,MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export default class RecursosComponent implements OnInit {

  private recursosService = inject(RecursosService);
  private dialog = inject(MatDialog);

  public displayedColumns: string[] = [
    'id_uta',
    'id_dici',
    'id_categoria',
    'modelo',
    'marca',
    'fecha_ingreso',
    'estado_recurso',
    'ubicacion',
    'descripcion',
    'actions'
  ];
  public recursoData = signal<RecursoData[]>([]);

  ngOnInit(): void {
    this.setRecursoData();
  }

  setRecursoData(){
    this.recursosService.getAllRecursos().subscribe((res) => {
      this.recursoData.set(res);
      console.log(res);
    });
  }


  openDialogCrear(){

    this.dialog.open(CrearRecursoDialogComponent, {
      maxWidth: '850px',
      maxHeight: '700px',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  openDialogEdit(id_uta: number){
    this.dialog.open(UpdateRecursosDialogComponent, {
      data: {id_uta: id_uta},
      maxWidth: '850px',
      maxHeight: '700px',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }

  openDialogDelete(id_uta: number){
    this.dialog.open(DeleteRecursoDialogComponent, {
      data: {id_uta: id_uta},
      height: '300px',
      width: '400px',
    });
  }
}
