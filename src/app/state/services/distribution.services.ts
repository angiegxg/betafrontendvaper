import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class DistributionService {
  private apiUrl = environment.apiUrl+'distribution/'+localStorage.getItem('id');

  constructor(private http: HttpClient) {}

  getAllDistribution(): Observable<types.Distribution[]> {
    console.log('Realizando la solicitud de obtener las distribuciones...');
    return this.http.get<types.Distribution[]>(this.apiUrl);
  }
}
