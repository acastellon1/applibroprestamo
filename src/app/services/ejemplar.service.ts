import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjemplarI } from '../models/ejemplar';

@Injectable({
  providedIn: 'root'
})
export class EjemplarService {
  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/ejemplares`
  constructor(
    private http: HttpClient
  ) { }

  getAllEjemplar():Observable<{ejemplar:EjemplarI[]}>{
    return this.http
      .get<{ejemplar:EjemplarI[]}>(this.base_path)
  }
}
