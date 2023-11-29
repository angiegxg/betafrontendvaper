import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as SellerActions from '../actions/seller.actions';
import { SellerService } from '../services/seller.services';

@Injectable()
export class SellerEffects {
    loadSeller$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SellerActions.loadSellers),
            mergeMap(() => {
                console.log('Efecto de carga de vendedores activado...');
                return this.sellerService.getSeller().pipe(
                    map((sellers) => {
                        console.log('vendedores cargados exitosamente:', sellers);
                        return SellerActions.loadSellersSuccess({ sellers })
                    }),
                    catchError(() => EMPTY)
                )
            }

            )

        ))
        loadSellerById$ = createEffect(() =>
        this.actions$.pipe(
          ofType(SellerActions.loadSellerById),
          mergeMap((action) =>
            this.sellerService.getSellerById(action.id).pipe(
              map((seller) => SellerActions.loadSellerByIdSuccess({ seller })),
              catchError(() => EMPTY)
            )
          )
        )
      );

    constructor(private actions$: Actions, private sellerService: SellerService) { }
}