import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private apiUrl = 'http://localhost:3001/sale'; // Cambiado el nombre de la entidad

  constructor(private http: HttpClient) {}

  getAllSales(): Observable<types.Sale[]> { // Cambiado el nombre del método
    console.log('Realizando la solicitud de obtener las ventas...'); // Cambiado el mensaje de consola
    return this.http.get<types.Sale[]>(this.apiUrl);
  }
}
