import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import types from 'src/app/models/interface.interface';

@Injectable({
  providedIn: 'root',
})
export class DistributionService {
  private apiUrl = 'http://localhost:3001/distribution';

  constructor(private http: HttpClient) {}

  getAllDistribution(): Observable<types.DistributionInterface[]> {
    console.log('Realizando la solicitud de obtener las distribuciones...');
    return this.http.get<types.DistributionInterface[]>(this.apiUrl);
  }
}
