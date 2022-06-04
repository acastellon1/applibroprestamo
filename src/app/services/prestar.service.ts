import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestarI } from '../models/prestar';

@Injectable({
  providedIn: 'root'
})
export class PrestarService {
  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/prestamos`
  constructor(
    private http: HttpClient
  ) { }

  getAllPrestar():Observable<{prestar: PrestarI[]}>{
    return this.http
      .get<{prestar:PrestarI[]}>(this.base_path)
  }

  createPrestar(data: any):Observable<PrestarI>{
    return this.http.post<PrestarI>(this.base_path, data)
  }
}
