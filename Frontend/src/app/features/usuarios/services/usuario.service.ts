import { inject, Injectable } from '@angular/core';
import { CreateUsuario, ResponseUsuario, Usuario } from '../interfaces/usuario.interface';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BASE_URL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  public getAllUsuarios() : Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.BASE_URL}/usuarios`)
  }

  public createUsuario(usuario: CreateUsuario): Observable<ResponseUsuario> {
    return this.httpClient.post<ResponseUsuario>(`${this.BASE_URL}/usuarios`, usuario)
  }

  public deleteUsuario(id_usuario: number): Observable<ResponseUsuario> {
    return this.httpClient.delete<ResponseUsuario>(`${this.BASE_URL}/usuarios/${id_usuario}`)
  }
}
