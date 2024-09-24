import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Recurso } from '../../interfaces/recurso.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecursosService } from '../../services/recursos.service';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export default class RecursosComponent implements OnInit {

  private recursosService = inject(RecursosService);

  public displayedColumns: string[] = ['icci_id', 'nombre', 'categoria', 'marca', 'modelo','color','estado','actions'];
  public recursoData = signal<Recurso[]>([]);
  
  ngOnInit(): void {
    this.setRecursoData();
  }

  setRecursoData(){
    const recursos = this.recursosService.getRecursos();
    this.recursoData.set(recursos);
  }
}
