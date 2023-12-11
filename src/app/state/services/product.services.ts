import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl+'product/'+localStorage.getItem('id'); 

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<types.Product[]> {
    console.log('Realizando la solicitud de obtener productos...');
    return this.http.get<types.Product[]>(this.apiUrl);
  }
}