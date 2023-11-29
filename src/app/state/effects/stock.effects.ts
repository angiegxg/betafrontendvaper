import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as StockActions from '../actions/stock.actions'; // Cambiado a StockActions
import { StockService } from '../services/stok.services'; // Cambiado a StockService

@Injectable()
export class StockEffects {
  loadStock$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StockActions.loadStocks), // Cambiado a loadStock
      mergeMap(() => {
        console.log('Efecto de carga de stock activado...'); // Cambiado a stock
        return this.stockService.getAllStock().pipe( // Cambiado a stockService
          map((stocks) => {
            console.log('Stock cargado exitosamente:', stocks); // Cambiado a stock
            return StockActions.loadStocksSuccess({ stocks }); // Cambiado a loadStockSuccess
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private stockService: StockService) {} // Cambiado a stockService
}
