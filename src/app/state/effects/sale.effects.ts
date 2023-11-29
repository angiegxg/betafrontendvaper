import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as SaleActions from '../actions/sale.actions'; // Cambiado a SaleActions
import { SaleService } from '../services/sale.services'; // Cambiado a SaleService

@Injectable()
export class SaleEffects {
  loadSale$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaleActions.loadSales), // Cambiado a loadSales
      mergeMap(() => {
        console.log('Efecto de carga de sale activado...'); // Cambiado a sale
        return this.saleService.getAllSales().pipe( // Cambiado a saleService
          map((sales) => {
            console.log('Sale cargado exitosamente:', sales); // Cambiado a sale
            return SaleActions.loadSalesSuccess({ sales }); // Cambiado a loadSalesSuccess
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private saleService: SaleService) {} // Cambiado a saleService
}
