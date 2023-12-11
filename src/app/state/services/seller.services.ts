import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import types from 'src/app/models/interface.interface';
import * as SellerActions from '../actions/seller.actions'
import { Store } from "@ngrx/store";
import { environment } from "src/app/environments/environments";

@Injectable({
    providedIn: 'root',
})
export class SellerService {
    private apiUrl= environment.apiUrl+'seller/'+localStorage.getItem('id')

    constructor(private http: HttpClient, private store:Store){}

    getSeller(): Observable<types.Seller[]>{
        console.log('Realizando la solicitud de obtener vendedores...');
        return this.http.get<types.Seller[]>(this.apiUrl)
    }

    getSellerById(sellerId: number): Observable<types.Seller> {
        console.log('Realizando la solicitud de obtener un vendedor por ID...');
        return this.http.get<types.Seller>(`${this.apiUrl}/${sellerId}`).pipe(
            map((seller) => {
              this.store.dispatch(SellerActions.loadSellerByIdSuccess({ seller }));
              return seller;
            }))
    }
}