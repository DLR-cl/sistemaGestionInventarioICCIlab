import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Ayudante } from '../../interfaces/ayudantes.interface';
import { AyudantesService } from '../../services/ayudantes.service';

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
}
