import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuariosDialogComponent } from './dialog/crear-ayudante-dialog/crear-usuarios-dialog.component';
import { DeleteUsuarioDialogComponent } from './dialog/delete-usuario-dialog/delete-usuario-dialog.component';

@Component({
  selector: 'app-ayudantes',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export default class UsuariosComponent implements OnInit {

  private ayudatesService = inject(UsuarioService)
  public usuariosData = signal<any>([])
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
    this.ayudatesService.getAllUsuarios().subscribe((res) => {
      console.log(res) 
      this.usuariosData.set(res);
    })
  }

  openDialogDelete(id_usuario: number){
    this.dialog.open(DeleteUsuarioDialogComponent,{
      data: {id_usuario:id_usuario},
      height: '300px',
      width: '400px',
    })
  }
  openDialog(){
    this.dialog.open(CrearUsuariosDialogComponent,{
      maxWidth: '850px',
      maxHeight: '700px',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    })
  }
}
