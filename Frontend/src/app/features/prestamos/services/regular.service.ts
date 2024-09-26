import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegularService {

  private BASE_URL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  realizarPrestamoRegular(id_uta:number): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}/prestamo-regular`,id_uta);
  }
}
