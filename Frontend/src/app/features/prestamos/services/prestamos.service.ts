import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { PrestamoData } from '../interfaces/prestamos.interface';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private BASE_URL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  realizarPrestamo(id_uta: string): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}/prestamos`,id_uta);
  }

  getAllPrestamos(): Observable<PrestamoData[]> {
    return this.httpClient.get<PrestamoData[]>(`${this.BASE_URL}/prestamos`);
  }

  finalizarPrestamo(id_prestamo:number): Observable<any> {
    return this.httpClient.patch(`${this.BASE_URL}/prestamos/finalizar`,id_prestamo);
  }
}
