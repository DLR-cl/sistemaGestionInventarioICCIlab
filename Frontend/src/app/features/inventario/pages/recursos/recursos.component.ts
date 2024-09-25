import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Recurso } from '../../interfaces/recurso.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecursosService } from '../../services/recursos.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CrearRecursoDialogComponent } from './dialog/crear-recurso-dialog/crear-recurso-dialog.component';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [DatePipe,MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export default class RecursosComponent implements OnInit {

  private recursosService = inject(RecursosService);

  public displayedColumns: string[] = ['recurso_id', 'categoria', 'marca', 'modelo','fecha_ingreso','estado','descripcion','actions'];
  public recursoData = signal<Recurso[]>([]);
  
  private dialogCrear = inject(MatDialog);
  ngOnInit(): void {
    this.setRecursoData();
  }

  setRecursoData(){
    const recursos = this.recursosService.getRecursos();
    this.recursoData.set(recursos);
  }

  openDialogCrear(){

    this.dialogCrear.open(CrearRecursoDialogComponent, {
      height: '600px',
      width: '600px'
    });
  }
}
