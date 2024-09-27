import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { PrestamoData, ResponsePrestamo } from '../interfaces/prestamos.interface';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private BASE_URL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  realizarPrestamo(id_uta: string): Observable<ResponsePrestamo> {
    return this.httpClient.post<ResponsePrestamo>(`${this.BASE_URL}/prestamos`,{id_uta});
  }

  getAllPrestamos(): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/prestamos`);
  }

  finalizarPrestamo(id_prestamo:number): Observable<any> {
    return this.httpClient.patch(`${this.BASE_URL}/prestamos/finalizar/${id_prestamo}`, {});
  }
}
