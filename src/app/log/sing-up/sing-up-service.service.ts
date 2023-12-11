import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingUpServiceService {

  private apiUrl = environment.apiUrl +'user'
   constructor(private http: HttpClient) {}
  login(username: string, passwordd: string): Observable<any> {
    const loginData = { email: username, password:passwordd }

    return this.http.post(`${this.apiUrl}`, loginData).pipe(
      tap((response: any) => {
        if (response) {
          alert('usuario creado correctamente')
          
          
        }
      })
    )
  }
}
