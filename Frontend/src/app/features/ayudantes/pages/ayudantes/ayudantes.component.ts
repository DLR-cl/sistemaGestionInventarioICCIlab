import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Ayudante } from '../../interfaces/ayudantes.interface';
import { AyudantesService } from '../../services/ayudantes.service';
import { MatDialog } from '@angular/material/dialog';
import { CrearAyudanteDialogComponent } from './dialog/crear-ayudante-dialog/crear-ayudante-dialog.component';

@Component({
  selector: 'app-ayudantes',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './ayudantes.component.html',
  styleUrl: './ayudantes.component.css'
})
export default class AyudantesComponent implements OnInit {

  private ayudatesService = inject(AyudantesService)
  public ayudantesData = signal<Ayudante[]>([])
  public dialog = inject(MatDialog)

  public displayedColumns = [
    'id_usuario',
    'rut',
    'nombre',
    'apellido',
    'usuario',
    'correo',
    'actions'
  ]

  ngOnInit() {
    this.setAyudantesData()
  }

  setAyudantesData() {
    const ayudantes = this.ayudatesService.getEstudiantesData()
    this.ayudantesData.set(ayudantes)
  }

  openDialog(){
    this.dialog.open(CrearAyudanteDialogComponent,{
      maxWidth: '850px',
      maxHeight: '700px',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    })
  }
}
