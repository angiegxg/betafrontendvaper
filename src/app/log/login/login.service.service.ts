import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiUrl = environment.apiUrl +'user/'
  private tokenKey = 'auth_token'
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password }

    return this.http.post(`${this.apiUrl}login`, loginData).pipe(
      tap((response: any) => {
        if (response && response.exists.token) {
          const id=response.exists.user.id
          const idString=id.toString()
          localStorage.setItem(this.tokenKey, response.exists.token)
          localStorage.setItem('id', idString) 
          
          
        }
      })
    )
  }
}
