import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private httpClient = inject(HttpClient);

  constructor() { }
}
