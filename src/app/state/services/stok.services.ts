import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = environment.apiUrl+'stock/'+localStorage.getItem('id')

  constructor(private http: HttpClient) {}

  getAllStock(): Observable<types.Stock[]> {
    console.log('Realizando la solicitud de obtener el stock...');
    return this.http.get<types.Stock[]>(this.apiUrl);
  }
}
