import { createAction, props } from '@ngrx/store';
import types from 'src/app/models/interface.interface';

export const loadStocks = createAction('[Stock] Load Stocks'); // Cambiado el nombre de la acción

export const loadStocksSuccess = createAction(
  '[Stock] Load Stocks Success', // Cambiado el nombre de la acción
  props<{ stocks: types.Stock[] }>() // Cambiado el nombre de la propiedad
);
