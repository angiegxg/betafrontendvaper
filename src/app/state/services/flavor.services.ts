
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class FlavorService {
  private apiUrl = environment.apiUrl+'flavor/'+localStorage.getItem('id'); 

  constructor(private http: HttpClient) {}

  getFlavors(): Observable<types.Flavor[]> {
    console.log('Realizando la solicitud de obtener sabores...');
    return this.http.get<types.Flavor[]>(this.apiUrl);
  }
}
