
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';

@Injectable({
  providedIn: 'root',
})
export class FlavorService {
  private apiUrl = 'https://stockvaper-dev-njpn.2.us-1.fl0.io/flavor'; 

  constructor(private http: HttpClient) {}

  getFlavors(): Observable<types.Flavor[]> {
    console.log('Realizando la solicitud de obtener sabores...');
    return this.http.get<types.Flavor[]>(this.apiUrl);
  }
}
